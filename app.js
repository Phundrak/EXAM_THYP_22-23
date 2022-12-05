'use strict';

const app = Vue.createApp({
  data() {
    return {
      items: null,
    }
  },
  mounted() {
    axios.get('https://phundrak.github.io/EXAM_THYP_22-23/omeka.json')
         .then((response) => this.items = response)
         .catch((error) => console.log(error));
  }
});

app.mount("#app");
