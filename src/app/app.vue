<template>
  <div>
    <h1>{{title}}</h1>
    <app-heroes />
    <app-messages />
  </div>
</template>

<script>
import Heroes from './hero/heroes.vue';
import MessagesComponent from './hero/messages.vue';

export default {
  name: 'App',
  components: {
    'app-heroes': Heroes,
    'app-messages': MessagesComponent
  },
  data: function() {
    return {
      title: 'Tour of Heroes'
    };
  }
};
</script>

<style>
/* Application-wide Styles */
h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2,
h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}
body,
input[type='text'],
button {
  color: #333;
  font-family: Cambria, Georgia;
}
/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
