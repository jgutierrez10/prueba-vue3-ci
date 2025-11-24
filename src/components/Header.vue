<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="header">
    <nav class="nav-container">
      <div class="logo">
        <span class="logo-icon">🎁</span>
        <span class="logo-text">Gran Sorteo</span>
      </div>

      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>

      <ul class="nav-menu" :class="{ 'nav-menu-active': isMenuOpen }">
        <li><a href="#inicio" @click="isMenuOpen = false">Inicio</a></li>
        <li><a href="#premios" @click="isMenuOpen = false">Premios</a></li>
        <li><a href="#sobre-nosotros" @click="isMenuOpen = false">Sobre Nosotros</a></li>
        <li><a href="#registrarse" @click="isMenuOpen = false" class="cta-link">Participar</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
}

.logo-icon {
  font-size: 2rem;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.hamburger {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-menu li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.nav-menu li a:hover {
  background: rgba(255, 255, 255, 0.2);
}

.cta-link {
  background: white !important;
  color: #667eea !important;
  font-weight: 600 !important;
}

.cta-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 1rem;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .nav-menu-active {
    max-height: 300px;
  }

  .nav-menu li {
    margin: 0.5rem 0;
  }

  .nav-menu li a {
    display: block;
    padding: 0.75rem 1rem;
  }
}
</style>
