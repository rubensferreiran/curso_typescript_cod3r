<template>
  <div>
    <h1>Contador</h1>
    <h2>{{ valor }}</h2>
    <button @click="setValor(+1)">+</button>
    <button @click="setValor(-1)">-</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    valorInicial: {
      type: Number,
    },
  },
  data() {
    return {
      valor: this.valorInicial || 0,
    };
  },
  methods: {
    setValor(delta: number) {
      this.valor += delta;
    },
  },
});
</script>

<style></style>
