'use strict';

const app = Vue.createApp({
  data() {
    return {
      items: null,
    };
  },
  mounted() {
    axios
      .get('https://phundrak.github.io/EXAM_THYP_22-23/omeka.json')
      .then((response) => {
        this.items = response.data.map((i) => {
          return { ...i, show: true };
        });
      })
      .catch((error) => console.log(error));
  },
  methods: {
    toggleItem(item) {
      console.log('CLICK');
      item.show = !item.show;
    },
  },
});

app.mount('#app');
