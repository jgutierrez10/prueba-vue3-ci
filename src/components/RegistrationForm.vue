<script setup>
import { ref, computed } from 'vue'

const emit = defineEmits(['submit-registration'])

const name = ref('')
const email = ref('')
const acceptTerms = ref(false)

// Validación de email
const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return email.value.length === 0 || emailRegex.test(email.value)
})

// Validación de nombre
const isValidName = computed(() => {
  return name.value.trim().length >= 2
})

// Validación completa del formulario
const isFormValid = computed(() => {
  return isValidName.value && 
         email.value.length > 0 && 
         isValidEmail.value && 
         acceptTerms.value
})

const handleSubmit = () => {
  if (isFormValid.value) {
    emit('submit-registration', {
      name: name.value.trim(),
      email: email.value.trim(),
      acceptTerms: acceptTerms.value
    })
    
    // Limpiar formulario después de enviar
    name.value = ''
    email.value = ''
    acceptTerms.value = false
  }
}
</script>

<template>
  <div class="registration-form">
    <form @submit.prevent="handleSubmit" class="form">
      <div class="form-group">
        <label for="name" class="form-label">Nombre completo</label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="form-input"
          :class="{ 'input-error': name.length > 0 && !isValidName }"
          placeholder="Ingresa tu nombre"
          required
        />
        <span v-if="name.length > 0 && !isValidName" class="error-message">
          El nombre debe tener al menos 2 caracteres
        </span>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="form-input"
          :class="{ 'input-error': !isValidEmail }"
          placeholder="tu@email.com"
          required
        />
        <span v-if="!isValidEmail" class="error-message">
          Por favor ingresa un email válido
        </span>
      </div>

      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input
            id="terms"
            v-model="acceptTerms"
            type="checkbox"
            class="checkbox-input"
            required
          />
          <span class="checkbox-text">
            Acepto los términos y condiciones del sorteo
          </span>
        </label>
      </div>

      <button
        type="submit"
        class="submit-button"
        :disabled="!isFormValid"
      >
        Registrarme
      </button>
    </form>
  </div>
</template>

<style scoped>
.registration-form {
  width: 100%;
}

.form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
  font-size: 0.95rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  outline: none;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.input-error {
  border-color: #ef4444;
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.375rem;
}

.checkbox-group {
  margin-bottom: 2rem;
}

.checkbox-label {
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  user-select: none;
}

.checkbox-input {
  margin-right: 0.75rem;
  margin-top: 0.25rem;
  width: 18px;
  height: 18px;
  cursor: pointer;
  flex-shrink: 0;
}

.checkbox-text {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.submit-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  background: #cccccc;
  cursor: not-allowed;
  opacity: 0.6;
}

@media (max-width: 480px) {
  .form {
    padding: 1.5rem;
  }
  
  .form-input {
    padding: 0.75rem;
  }
  
  .submit-button {
    padding: 0.875rem;
    font-size: 1rem;
  }
}
</style>
