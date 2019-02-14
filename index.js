"use strict";

Vue.component('text-box', {
  props: ['value'],
  template:
    `<div class="text-box">
       <input
         v-bind:value="value"
         v-on:input="$emit('input', $event.target.value)">
       <button @click="$emit('persist')">Save</button>
     </div>`
})

var data = {
  text: "This is a text box."
}

var page = new Vue({
  el: "#page",
  data: data,
  mounted() {
    if (localStorage.text) {
      this.text = localStorage.text;
    }
  },
  methods: {
    persist() {
      localStorage.text = this.text;
    }
  }
})
