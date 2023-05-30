<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Images } from '@/model/Images'
const ImagesPortal = ref<Images[]>([]);

const getData = async () => {
	try {
		const response = await fetch('public/data/data.json');
		const data = await response.json();
		ImagesPortal.value = data;
	} catch (error) {
		console.log(error)
	}
}

onMounted(() => {
	getData()
});

</script>

<template>
	<section class="work section" id="work">
		<h2 class="section-title">Proyectos</h2>
		<div class="work__container bd-grid">
			<div v-for="img in ImagesPortal" class="container-img" :key="img.id">
				<div class="work__item">
					<el-image class="work__img" :src="img.url" :zoom-rate="1.2" :preview-src-list="img.srcList"
						:initial-index="6" fit="cover" />
					<div class="work__overlay">
						<i class='bx bx-images'></i>
					</div>
				</div>
				<div class="work__title">
					<h2>{{ img.title }}</h2>
				</div>
			</div>
		</div>
	</section>
</template>