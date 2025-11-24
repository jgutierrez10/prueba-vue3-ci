<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = [
  {
    id: 1,
    title: '¡Gana Premios Increíbles!',
    subtitle: 'Participa en nuestro sorteo y llévate sorpresas exclusivas',
    image: '🎉'
  },
  {
    id: 2,
    title: 'Miles de Ganadores',
    subtitle: 'Únete a la comunidad de personas que ya han ganado',
    image: '🏆'
  },
  {
    id: 3,
    title: 'Es Gratis y Fácil',
    subtitle: 'Solo completa el formulario y estarás participando',
    image: '✨'
  }
]

const currentSlide = ref(0)
let intervalId = null

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  intervalId = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<template>
  <section class="slider">
    <div class="slider-container">
      <div 
        v-for="(slide, index) in slides" 
        :key="slide.id"
        class="slide"
        :class="{ active: index === currentSlide }"
      >
        <div class="slide-content">
          <div class="slide-icon">{{ slide.image }}</div>
          <h1 class="slide-title">{{ slide.title }}</h1>
          <p class="slide-subtitle">{{ slide.subtitle }}</p>
          <a href="#registrarse" class="cta-button">Participar Ahora</a>
        </div>
      </div>

      <button class="slider-control prev" @click="prevSlide" aria-label="Anterior">
        ‹
      </button>
      <button class="slider-control next" @click="nextSlide" aria-label="Siguiente">
        ›
      </button>

      <div class="slider-dots">
        <button
          v-for="(slide, index) in slides"
          :key="slide.id"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
          :aria-label="`Ir a slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slider {
  position: relative;
  height: 600px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.slider-container {
  position: relative;
  height: 100%;
  width: 100%;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide.active {
  opacity: 1;
}

.slide-content {
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.slide-icon {
  font-size: 6rem;
  margin-bottom: 1rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.slide-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.slide-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  padding: 1rem 3rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: 50px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 3rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.slider-control:hover {
  background: rgba(255, 255, 255, 0.5);
}

.slider-control.prev {
  left: 2rem;
}

.slider-control.next {
  right: 2rem;
}

.slider-dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: white;
  transform: scale(1.3);
}

@media (max-width: 768px) {
  .slider {
    height: 500px;
  }

  .slide-title {
    font-size: 2rem;
  }

  .slide-subtitle {
    font-size: 1.125rem;
  }

  .slide-icon {
    font-size: 4rem;
  }

  .cta-button {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }

  .slider-control {
    font-size: 2rem;
    padding: 0.5rem 1rem;
  }

  .slider-control.prev {
    left: 1rem;
  }

  .slider-control.next {
    right: 1rem;
  }
}
</style>
