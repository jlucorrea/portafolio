<script setup lang="ts">
const url = '/src/assets/images/img-systems/sys1.png'
const url1 = '/src/assets/images/img-ecommerce/ec1.png'
const url2 = '/src/assets/images/img-iderma/id1.png'
const url3 = '/src/assets/images/img-lavetsur/lab1.png'
const url4 = '/src/assets/images/img-metronic/mt2.png'

const srcList = [
	'/src/assets/images/img-systems/sys1.png',
	'/src/assets/images/img-systems/sys2.png',
	'/src/assets/images/img-systems/sys3.png',
	'/src/assets/images/img-systems/sys3.5.png',
	'/src/assets/images/img-systems/sys4.png',
	'/src/assets/images/img-systems/sys5.png',
];

const srcList1 = [
	'/src/assets/images/img-ecommerce/ec1.png',
	'/src/assets/images/img-ecommerce/ec2.png',
	'/src/assets/images/img-ecommerce/ec3.png',
];

const srcList2 = [
	'/src/assets/images/img-iderma/id1.png',
	'/src/assets/images/img-iderma/id2.png',
	'/src/assets/images/img-iderma/id3.png',
	'/src/assets/images/img-iderma/id4.png',
	'/src/assets/images/img-iderma/id5.png',
];

const srcList3 = [
	'/src/assets/images/img-lavetsur/lab1.png',
	'/src/assets/images/img-lavetsur/lab2.png',
	'/src/assets/images/img-lavetsur/lab3.png',
	'/src/assets/images/img-lavetsur/lab4.png',
];

const srcList4 = [
	'/src/assets/images/img-metronic/mt2.png',
	'/src/assets/images/img-metronic/mt1.png',
	'/src/assets/images/img-metronic/mt3.png',
	'/src/assets/images/img-metronic/mt4.png',
	'/src/assets/images/img-metronic/mt5.png',
	'/src/assets/images/img-metronic/mt6.png',
];

const url5 =
	'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList5 = [
	'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
	'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
	'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
	'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
	'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
	'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
	'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
]

</script>

<template>
	<!--===== WORK =====-->
	<section class="work section" id="work">
		<h2 class="section-title">Proyectos</h2>
		<div class="work__container bd-grid">
			<div class="work__item">
				<el-image class="work__img" :src="url" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="6"
					fit="cover" />
				<div class="work__title">Título del Proyecto 1</div>
				<div class="work__actions work__actions--center">
					<a href="#"><i class='bx bxl-github'></i></a>
				</div>
			</div>
			<div class="work__item">
				<el-image class="work__img" :src="url" :zoom-rate="1.2" :preview-src-list="srcList" :initial-index="6"
					fit="cover" />
				<div class="work__title">Sistema de Compra y Ventas</div>
			</div>
			<div class="work__item">
				<el-image class="work__img" :src="url1" :zoom-rate="1.2" :preview-src-list="srcList1" :initial-index="4"
					fit="cover" />
				<div class="work__title">Ecommerce Vue3</div>
			</div>
			<div class="work__item">
				<el-image class="work__img" :src="url2" :zoom-rate="1.2" :preview-src-list="srcList2" :initial-index="6"
					fit="cover" />
				<div class="work__title">Iderma Capillar</div>
			</div>
			<div class="work__item">
				<el-image class="work__img" :src="url3" :zoom-rate="1.2" :preview-src-list="srcList3" :initial-index="4"
					fit="cover" />
				<div class="work__title">Labvetsur</div>
			</div>
			<div class="work__item">
				<el-image class="work__img" :src="url4" :zoom-rate="1.2" :preview-src-list="srcList4" :initial-index="6"
					fit="cover" />
				<div class="work__title">Sistema de Asistencia</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>