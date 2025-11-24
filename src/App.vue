<script setup>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import RegistrationForm from './components/RegistrationForm.vue'

const handleRegistration = (formData) => {
  	console.log('Registro recibido:', formData)
  	// Aquí puedes agregar lógica para enviar datos a un backend
  	alert(`¡Gracias por registrarte, ${formData.name}!`)
}
</script>

<template>
  	<div class="app">
		<Header />
		<Slider />
		<About />
		
		<section class="registration-section">
			<div class="container">
				<h2 class="section-title">¡Participa en nuestro sorteo!</h2>
				<p class="section-description">
				Regístrate ahora y tendrás la oportunidad de ganar increíbles premios.
				Solo toma un momento completar el formulario.
				</p>
				<RegistrationForm @submit-registration="handleRegistration" />
			</div>
		</section>
		<Footer />
  	</div>
</template>

<style scoped>
	.app {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

.registration-section {
  	padding: 4rem 2rem;
  	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  	color: white;
}

.container {
  	max-width: 600px;
  	margin: 0 auto;
}

.section-title {
  	font-size: 2.5rem;
  	font-weight: bold;
  	text-align: center;
  	margin-bottom: 1rem;
  	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.section-description {
  	font-size: 1.125rem;
  	text-align: center;
  	margin-bottom: 2rem;
  	opacity: 0.95;
  	line-height: 1.6;
}

@media (max-width: 768px) {
	.section-title {
		font-size: 2rem;
	}
	
	.section-description {
		font-size: 1rem;
	}
	
	.registration-section {
		padding: 3rem 1rem;
	}
}
</style>

<style>
/* Estilos globales básicos */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
