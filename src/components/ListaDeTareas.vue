<template>
    <div>
        <h2>Lista de Tareas</h2>
        <input type="text" v-model="nuevaTarea" @keyup.enter="addTarea">
        <ul>
            <li v-for="(tareas, index) in tareas" :key="index">
                {{ tareas }} 
                <button @click="deleteTarea(index)">Eliminar</button>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const tareas = ref([]);
const nuevaTarea = ref('');
const addTarea = () => {
    tareas.value.push(nuevaTarea.value);
    nuevaTarea.value = '';
}
const deleteTarea = (index) => {
    tareas.value.splice(index, 1);
}
</script>
<style>
</style>