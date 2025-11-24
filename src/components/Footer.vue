<script setup>
const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: '📘', name: 'Facebook', url: '#' },
  { icon: '📷', name: 'Instagram', url: '#' },
  { icon: '🐦', name: 'Twitter', url: '#' },
  { icon: '💼', name: 'LinkedIn', url: '#' }
]
</script>

<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">
            <span class="logo-icon">🎁</span>
            Gran Sorteo
          </h3>
          <p class="footer-description">
            La plataforma de sorteos más confiable y emocionante. 
            Participar es gratis y fácil.
          </p>
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              class="social-link"
              :aria-label="social.name"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4 class="footer-section-title">Enlaces Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#premios">Premios</a></li>
            <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
            <li><a href="#registrarse">Participar</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-section-title">Legal</h4>
          <ul class="footer-links">
            <li><a href="#terminos">Términos y Condiciones</a></li>
            <li><a href="#privacidad">Política de Privacidad</a></li>
            <li><a href="#reglas">Reglas del Sorteo</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4 class="footer-section-title">Newsletter</h4>
          <p class="newsletter-description">
            Recibe notificaciones sobre nuevos sorteos y ganadores.
          </p>
          <div class="newsletter-form">
            <input 
              type="email" 
              placeholder="tu@email.com" 
              class="newsletter-input"
            />
            <button class="newsletter-button">Suscribir</button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="copyright">
          © {{ currentYear }} Gran Sorteo. Todos los derechos reservados.
        </p>
        <p class="made-with">
          Hecho con 💜 para ti
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2d3748 0%, #1a202c 100%);
  color: white;
  padding: 4rem 2rem 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-icon {
  font-size: 2rem;
}

.footer-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  text-decoration: none;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.footer-section-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.25rem;
  color: white;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: white;
  padding-left: 5px;
}

.newsletter-description {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  gap: 0.5rem;
}

.newsletter-input {
  flex: 1;
  padding: 0.75rem;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  transition: all 0.3s ease;
}

.newsletter-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.newsletter-input:focus {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.15);
}

.newsletter-button {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.newsletter-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright,
.made-with {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1rem 1.5rem;
  }

  .footer-content {
    gap: 2rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
