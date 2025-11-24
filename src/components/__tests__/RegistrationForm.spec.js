import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import RegistrationForm from '../RegistrationForm.vue'

describe('RegistrationForm', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(RegistrationForm)
  })

  it('renderiza el formulario correctamente', () => {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('#name').exists()).toBe(true)
    expect(wrapper.find('#email').exists()).toBe(true)
    expect(wrapper.find('#terms').exists()).toBe(true)
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true)
  })

  it('botón de envío está deshabilitado cuando el formulario está vacío', async () => {
    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
  })

  it('botón de envío está deshabilitado cuando falta el checkbox de términos', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')

    await nameInput.setValue('Juan Pérez')
    await emailInput.setValue('juan@example.com')

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeDefined()
  })

  it('botón de envío se habilita cuando todos los campos son válidos y checkbox está marcado', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const termsCheckbox = wrapper.find('#terms')

    await nameInput.setValue('Juan Pérez')
    await emailInput.setValue('juan@example.com')
    await termsCheckbox.setValue(true)

    const submitButton = wrapper.find('button[type="submit"]')
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  it('muestra mensaje de error cuando el nombre es muy corto', async () => {
    const nameInput = wrapper.find('#name')
    await nameInput.setValue('J')

    expect(wrapper.text()).toContain('El nombre debe tener al menos 2 caracteres')
  })

  it('muestra mensaje de error cuando el email es inválido', async () => {
    const emailInput = wrapper.find('#email')
    await emailInput.setValue('email-invalido')

    expect(wrapper.text()).toContain('Por favor ingresa un email válido')
  })

  it('no muestra mensaje de error cuando el email es válido', async () => {
    const emailInput = wrapper.find('#email')
    await emailInput.setValue('usuario@dominio.com')

    expect(wrapper.text()).not.toContain('Por favor ingresa un email válido')
  })

  it('emite evento submit-registration con datos correctos al enviar el formulario', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const termsCheckbox = wrapper.find('#terms')

    await nameInput.setValue('María García')
    await emailInput.setValue('maria@example.com')
    await termsCheckbox.setValue(true)

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')

    expect(wrapper.emitted('submit-registration')).toBeTruthy()
    expect(wrapper.emitted('submit-registration')[0]).toEqual([
      {
        name: 'María García',
        email: 'maria@example.com',
        acceptTerms: true
      }
    ])
  })

  it('limpia el formulario después de enviar', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const termsCheckbox = wrapper.find('#terms')

    await nameInput.setValue('Carlos López')
    await emailInput.setValue('carlos@example.com')
    await termsCheckbox.setValue(true)

    const form = wrapper.find('form')
    await form.trigger('submit.prevent')

    expect(nameInput.element.value).toBe('')
    expect(emailInput.element.value).toBe('')
    expect(termsCheckbox.element.checked).toBe(false)
  })

  it('valida formato de email correctamente', async () => {
    const emailInput = wrapper.find('#email')
    const submitButton = wrapper.find('button[type="submit"]')
    const nameInput = wrapper.find('#name')
    const termsCheckbox = wrapper.find('#terms')

    await nameInput.setValue('Test User')
    await termsCheckbox.setValue(true)

    // Email inválido
    await emailInput.setValue('invalid-email')
    expect(submitButton.attributes('disabled')).toBeDefined()

    // Email válido
    await emailInput.setValue('valid@email.com')
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  it('valida que el nombre tenga al menos 2 caracteres', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const termsCheckbox = wrapper.find('#terms')
    const submitButton = wrapper.find('button[type="submit"]')

    await emailInput.setValue('test@example.com')
    await termsCheckbox.setValue(true)

    // Nombre con 1 carácter
    await nameInput.setValue('A')
    expect(submitButton.attributes('disabled')).toBeDefined()

    // Nombre con 2 caracteres
    await nameInput.setValue('AB')
    expect(submitButton.attributes('disabled')).toBeUndefined()
  })

  it('requiere aceptación de términos para habilitar el envío', async () => {
    const nameInput = wrapper.find('#name')
    const emailInput = wrapper.find('#email')
    const termsCheckbox = wrapper.find('#terms')
    const submitButton = wrapper.find('button[type="submit"]')

    await nameInput.setValue('Usuario Test')
    await emailInput.setValue('test@example.com')

    // Sin aceptar términos
    expect(submitButton.attributes('disabled')).toBeDefined()

    // Aceptando términos
    await termsCheckbox.setValue(true)
    expect(submitButton.attributes('disabled')).toBeUndefined()

    // Desaceptando términos
    await termsCheckbox.setValue(false)
    expect(submitButton.attributes('disabled')).toBeDefined()
  })
})
