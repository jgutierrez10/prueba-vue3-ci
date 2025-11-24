<script setup>
const features = [
  {
    id: 1,
    icon: '🎯',
    title: 'Fácil de Participar',
    description: 'Solo necesitas completar un simple formulario de registro y estarás dentro del sorteo.'
  },
  {
    id: 2,
    icon: '🎁',
    title: 'Premios Increíbles',
    description: 'Tenemos una gran variedad de premios esperando por ti. Desde gadgets hasta experiencias únicas.'
  },
  {
    id: 3,
    icon: '🔒',
    title: '100% Seguro',
    description: 'Tus datos están protegidos. Nunca compartiremos tu información con terceros.'
  },
  {
    id: 4,
    icon: '⚡',
    title: 'Resultados Rápidos',
    description: 'Anunciamos a los ganadores cada semana. ¡Podrías ser el próximo afortunado!'
  }
]
</script>

<template>
  <section id="sobre-nosotros" class="about">
    <div class="container">
      <div class="about-header">
        <h2 class="section-title">¿Por Qué Participar?</h2>
        <p class="section-description">
          Nuestro sorteo es transparente, seguro y está lleno de oportunidades para ganar.
          Miles de personas ya confían en nosotros.
        </p>
      </div>

      <div class="features-grid">
        <div 
          v-for="feature in features" 
          :key="feature.id"
          class="feature-card"
        >
          <div class="feature-icon">{{ feature.icon }}</div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>

      <div class="stats">
        <div class="stat-item">
          <div class="stat-number">10,000+</div>
          <div class="stat-label">Participantes</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Ganadores</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Premios Entregados</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 5rem 2rem;
  background: #f8f9fa;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.about-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 3rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.25rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
  padding: 3rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
}

.stat-item {
  padding: 1rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  opacity: 0.95;
}

@media (max-width: 768px) {
  .about {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .features-grid {
    gap: 1.5rem;
  }

  .feature-card {
    padding: 2rem;
  }

  .stats {
    padding: 2rem 1rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .stat-label {
    font-size: 1rem;
  }
}
</style>
