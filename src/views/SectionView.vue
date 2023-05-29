<script setup lang="ts">
import Welcome from '@/views/HomeView.vue';
import AboutSection from '@/views/Sections/AboutSection.vue';
import SkillSection from '@/views/Sections/SkillSection.vue';
import ProjectSection from '@/views/Sections/ProjectSection.vue';
import ContactSection from '@/views/Sections/ContactSection.vue';
</script>

<template>
	<main class="l-main">
		<Welcome />
		<AboutSection />
		<SkillSection />
		<ProjectSection />
		<ContactSection />
	</main>
</template>