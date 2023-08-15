<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">
      my todo list
    </div>
    <form @submit.prevent="addToDo">
      <div class="field is-grouped mb-5 ">
        <p class="control is-expanded">
          <input v-model="newtodoContent" class="input" type="text" placeholder="add todo">
        </p>
        <p class="control">
          <button :disabled="!newtodoContent" class="button is-info">
            add
          </button>
        </p>
      </div>
    </form>

    <div :class="{ 'has-background-success-light': todo.done }" v-for="todo in todos" :key="todo.id" class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column" :class="{ 'has-text-success line-through': todo.done }"> {{ todo.content }}</div>
            <div class="column is-5 has-text-right">
              <button @click="togglerDone(todo.id)" class="button is-ligth"
                :class="todo.done ? 'is-success' : 'is-light'">&check;</button>
              <button @click="deleteToDo(todo.id)" class="button is-danger ml-2">&cross;</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
//import
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

//todo

const todos = ref([
  // {
  //   id: 'id1',
  //   content: 'some',
  //   done: false,
  // },
  // {
  //   id: 'id2',
  //   content: 'some',
  //   done: true,
  // }
]);

//methods

const newtodoContent = ref(""); // получает внутреннее значение, и вернет нам реактивный мутированный реф объект. внутри есть только одно свойство - value. 

const addToDo = () => {
  const newToDo = {
    id: uuidv4(),
    content: newtodoContent.value,
    done: false,
  }
  // console.log('log ', newToDo);
  todos.value.unshift(newToDo);
  newtodoContent.value = ''
  // console.log("addToDo");
}

//delete todo
const deleteToDo = id => {
  console.log('deleteid', id);
  todos.value = todos.value.filter(todo => todo.id !== id)
}

//togglerDone
const togglerDone = id => {
  const index = todos.value.findIndex(todo=> todo.id === id);
  console.log(index);
  todos.value[index].done = !todos.value[index].done
}
</script>



<style>
@import "/node_modules/bulma/css/bulma.min.css";

.wrapper-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}

.line-through {
  text-decoration: line-through;
}
</style>

