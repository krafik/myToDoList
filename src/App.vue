<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">
      my todo list
    </div>
    <div class="field is-grouped mb-5 ">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="add todo">
      </p>
      <p class="control">
        <a class="button is-info">
          add
        </a>
      </p>
    </div>
    <div
    v-for="i in 3" :key="i"
    class="card mb-5">
      <div class="card-content">
        <div class="content">
          <div class="columns is-mobile is-vcentered">
            <div class="column"> hello</div>
            <div class="column is-5 has-text-right">
              <button class="button is-ligth">&check;</button>
              <button class="button is-danger ml-2">&cross;</button>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>


<style>
@import "/node_modules/bulma/css/bulma.min.css";

.wrapper-todo {
  max-width: 400px;
  padding: 20px;
  margin: 0 auto;
}
</style>

