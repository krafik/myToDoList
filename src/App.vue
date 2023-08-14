<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">
      my todo list
    </div>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="add todo">
      </p>
      <p class="control">
        <a class="button is-info">
          add
        </a>
      </p>
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

