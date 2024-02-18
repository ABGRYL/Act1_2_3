<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
          <th>Contraseña</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td v-if="!user.isEditing">{{ user.firstName }}</td>
          <td v-else><input v-model="user.firstName" required /></td>

          <td v-if="!user.isEditing">{{ user.lastName }}</td>
          <td v-else><input v-model="user.lastName" required /></td>

          <td v-if="!user.isEditing">{{ user.email }}</td>
          <td v-else><input v-model="user.email" required /></td>

          <td v-if="!user.isEditing">{{ user.password }}</td>
          <td v-else><input v-model="user.password" type="password" required /></td>

          <td>
            <button v-if="!user.isEditing" @click="editUser(index)">Editar</button>
            <button v-else @click="saveUser(index)">Guardar</button>
            <button @click="deleteUser(index)" class="delete-button">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addUser">Añadir Usuario</button>
    <router-link to="/">Volver al inicio</router-link>
  </div>

</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const users = ref([
      { firstName: 'Abril', lastName: 'Adame', email: 'test@test.com', password: 'password', isEditing: false },
      
    ])

    function editUser(index: number) {
      users.value[index].isEditing = true
    }

 
    function saveUser(index: number) {
      const user = users.value[index]

      if (!user.firstName || !user.lastName || !user.email || !user.password) {
        alert('Todos los campos son obligatorios.')
      } else {
        user.isEditing = false
      }
    }

    function deleteUser(index: number) {
      users.value.splice(index, 1)
    }

    function addUser() {
      const newUser = { firstName: '', lastName: '', email: '', password: '', isEditing: true }

      const userExists = users.value.some(user => user.email === newUser.email)

      if (userExists) {
        alert('El correo electrónico ya está registrado.')
      } else {
        users.value.push(newUser)
      }
    }
    return { users, editUser, saveUser, deleteUser, addUser }
  },
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}


th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(201, 117, 177); 
  color: rgb(250, 250, 250);
}

button {
  margin-right: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}

button:active {
  opacity: 1;
}

button:nth-child(1) {
  background-color: rgb(201, 117, 177);
  color: white;
}

button:nth-child(2) {
  background-color: rgb(95, 0, 163);
  color: white;
}

.delete-button {
  background-color: red;
  color: white;
}


</style>
