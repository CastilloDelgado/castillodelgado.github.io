import { computed, readonly, ref, watch } from 'vue'
import es from '../content/es'
import en from '../content/en'

const messages = { es, en }
export const languages = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
]
const storageKey = 'cv-language'

export function useLanguage() {
  const locale = ref('es')
  try {
    const saved = window.localStorage.getItem(storageKey)
    if (Object.hasOwn(messages, saved)) locale.value = saved
  } catch {
    // Storage can be unavailable; the selector still works for this visit.
  }

  const content = computed(() => messages[locale.value])

  function setLanguage(language) {
    if (!Object.hasOwn(messages, language)) return
    locale.value = language
    try {
      window.localStorage.setItem(storageKey, language)
    } catch {
      // Keep the chosen language in memory when storage is unavailable.
    }
  }

  watch(content, ({ meta }) => {
    if (typeof document === 'undefined') return
    document.documentElement.lang = locale.value
    document.title = meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description)
  }, { immediate: true })

  return { locale: readonly(locale), content, setLanguage }
}
