<template>
  <div>
    <h1>Registrate</h1>
    <form @submit.prevent="registerUser">
      <label>
        Nombre:
        <input v-model="newUser.firstName" type="text" required />
      </label>
      <label>
        Apellido:
        <input v-model="newUser.lastName" type="text" required />
      </label>
      <label>
        Correo:
        <input v-model="newUser.email" type="email" required />
      </label>
      <label>
        Contraseña:
        <input v-model="newUser.password" type="password" required />
      </label>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="errorMessage" class="alert">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default {
  setup() {
    const users = ref<User[]>([
      { firstName: '', lastName: '', email: 'test@test.com', password: '' },
    ])
    const newUser = ref<User>({ firstName: '', lastName: '', email: '', password: '' })
    const errorMessage = ref<string>('')
    const successMessage = ref<string>('')

    function registerUser() {
      if (!newUser.value.firstName || !newUser.value.lastName || !newUser.value.email || !newUser.value.password) {
        errorMessage.value = 'Todos los campos son obligatorios.'
        return
      }

      const userExists = users.value.some((user: User) => user.email === newUser.value.email)

      if (userExists) {
        errorMessage.value = 'El correo electrónico ya está en uso. Por favor, ingresa otro correo electrónico.'
      } else {
        users.value.push({ ...newUser.value })
        newUser.value = { firstName: '', lastName: '', email: '', password: '' }
        errorMessage.value = ''
        successMessage.value = 'Se ha registrado correctamente.'
      }
    }

    return { newUser, registerUser, errorMessage, successMessage }
  },
}
</script>

<style scoped>
.alert {
  color: red;
}

.success {
  color: rgb(42, 40, 169);
}

form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

label {
  margin-bottom: 10px;
}

input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgb(201, 117, 177);
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: rgb(6, 83, 41);
}
</style>
