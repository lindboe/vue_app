"use strict";

var page = new Vue({
  el: "#page",
  data: {
    text: "This is a text box."
  },
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
