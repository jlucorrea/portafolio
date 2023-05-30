<script setup lang="ts">
import { ref } from 'vue'

const name = ref('');
const email = ref('');
const message = ref('');

const resetForm = () => {
	name.value = '';
	email.value = '';
	message.value = '';
}

const sendMessage = () => {
	if (!name.value && !email.value && !message.value) {
		return alert('Todos los campos son obligarotios.')
	}
	const encodedMessage = encodeURI(whatsappMessage());
	const whatsappURL = `https://api.whatsapp.com/send/?phone=51982655823&text=${encodedMessage}`;
	window.open(whatsappURL, '_blank');
	resetForm();
}

const whatsappMessage = () => {
	let sendInfo = `Hola quiero que tal: \n`;
	sendInfo += `Soy: ${name.value}\n`;
	sendInfo += `Mi correo de contacto es: ${email.value}\n`;
	sendInfo += `Información: ${message.value}\n`;
	return sendInfo;
}

</script>

<template>
	<section class="contact section" id="contact">
		<h2 class="section-title">Contacto</h2>
		<div class="contact__container bd-grid">
			<form action="" class="contact__form" @submit.prevent="sendMessage" autocomplete="off">
				<input type="text" v-model="name" placeholder="Nombre" class="contact__input" required>
				<input type="email" v-model="email" placeholder="Email" class="contact__input" required>
				<textarea v-model="message" name="" id="" cols="30" rows="10" class="contact__input" placeholder="Mensaje" required></textarea>
				<button type="submit" class="contact__button button"> Contactar <i class='bx bxl-whatsapp'></i></button>
			</form>
		</div>
	</section>
</template>