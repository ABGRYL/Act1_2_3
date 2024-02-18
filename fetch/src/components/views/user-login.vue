<template>
    <div>
      <h1>Inicio de sesión</h1>
      <input v-model="email" type="email" placeholder="Correo">
      <input v-model="password" type="password" placeholder="Contraseña">
      <button @click="login">Login</button>
      <div v-if="showAlert" class="alert"> 
      {{ alertMessage }}
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const showAlert = ref(false);
      const alertMessage = ref('');
  
      const login = () => {
      const staticEmail = 'test@test.com';
      const staticPassword = 'password';
      if (email.value === staticEmail && password.value === staticPassword) {
        alertMessage.value = 'Login successful';
        showAlert.value = true;
      } else {
        alertMessage.value = 'Correo o contraseña incorrectos. Por favor, inténtalo de nuevo';
        showAlert.value = true;
      }
    };
  
    return { email, password, login, showAlert, alertMessage };
    },
  };
  </script>

<style scoped>
.alert {
  color: white;
  background-color: red;
  padding: 10px;
  margin-top: 10px;
}

h1 {
  margin-bottom: 20px;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
}

button {
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgb(201, 117, 177);
  color: white;
  cursor: pointer;
  width: 200px;
}

button:hover {
  background-color: rgb(6, 83, 41);
}
</style>