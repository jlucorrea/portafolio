<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const activeSection = ref('');

const isActive = (routePath: string) => {
	return router.currentRoute.value.path === routePath;
};

const scrollToSection = (sectionId: string) => {
	const section = document.getElementById(sectionId);
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
};

router.afterEach((to) => {
	activeSection.value = to.hash.substring(1);
});
</script>

<template>
	<header class="l-header">
		<nav class="nav bd-grid">
			<div>
				<a href="#" class="nav__logo">JORGE CORREA</a>
			</div>
			<div class="nav__menu" id="nav-menu">
				<ul class="nav__list">
					<li class="nav__item">
						<RouterLink to="/" class="nav__link" :class="{ active: isActive('/') }"
							@click="scrollToSection('home')">Inicio</RouterLink>
					</li>
					<li class="nav__item">
						<RouterLink to="/about" class="nav__link" :class="{ active: isActive('/about') }"
							@click="scrollToSection('about')">Sobre mi</RouterLink>
					</li>
					<li class="nav__item">
						<RouterLink to="/skill" class="nav__link" :class="{ active: isActive('/skill') }"
							@click="scrollToSection('skills')">Habilidades</RouterLink>
					</li>
					<li class="nav__item">
						<RouterLink to="/work" class="nav__link" :class="{ active: isActive('/work') }"
							@click="scrollToSection('work')">Proyectos</RouterLink>
					</li>
					<li class="nav__item">
						<RouterLink to="/contact" class="nav__link" :class="{ active: isActive('/contact') }"
							@click="scrollToSection('contact')">Contacto</RouterLink>
					</li>
				</ul>
			</div>
			<div class="nav__toggle" id="nav-toggle">
				<i class='bx bx-menu'></i>
			</div>
		</nav>
	</header>
</template>