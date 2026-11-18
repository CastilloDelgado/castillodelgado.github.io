import { onMounted, onUnmounted, readonly, ref, watch } from 'vue'

export function useTheme() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)')
  let saved
  try { saved = window.localStorage.getItem('cv-theme') } catch {}
  let followsSystem = saved !== 'dark' && saved !== 'light'
  const theme = ref(followsSystem ? (preference.matches ? 'dark' : 'light') : saved)

  watch(theme, (value) => {
    document.documentElement.dataset.theme = value
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', value === 'dark' ? '#101b17' : '#073e34')
  }, { immediate: true })

  function toggleTheme() {
    followsSystem = false
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    try { window.localStorage.setItem('cv-theme', theme.value) } catch {}
  }

  function syncSystem(event) {
    if (followsSystem) theme.value = event.matches ? 'dark' : 'light'
  }
  onMounted(() => preference.addEventListener('change', syncSystem))
  onUnmounted(() => preference.removeEventListener('change', syncSystem))

  return { theme: readonly(theme), toggleTheme }
}
