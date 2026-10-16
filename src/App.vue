<script setup>
import SiteHeader from './components/SiteHeader.vue'
import ProfileSection from './components/sections/ProfileSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import { useLanguage } from './composables/useLanguage'

const { locale, content, setLanguage } = useLanguage()
</script>

<template>
  <SiteHeader :content="content.header" :locale="locale" @language-change="setLanguage" />
  <main id="contenido">
    <ProfileSection :content="content.profile" />
    <ExperienceSection :content="content.experience" />
    <ProjectsSection :content="content.projects" />
    <SkillsSection :content="content.skills" />
    <EducationSection :content="content.education" />
    <ContactSection :content="content.contact" />
  </main>
</template>
