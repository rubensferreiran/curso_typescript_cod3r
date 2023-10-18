<template>
  <div>
    <h1>Contator (Classe)</h1>
    <h2>{{ valor }}</h2>
    <h3>{{ getParOrImpar() }}</h3>
    <button @click="setValor(+1)">+</button>
    <button @click="setValor(-1)">-</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class ContadorClasse extends Vue {
  @Prop(Number) private readonly valorInicial?: number;
  private valor: number = this.valorInicial || 0;

  public setValor(delta: number) {
    this.valor += delta;
  }
  public getParOrImpar(): string {
    return this.valor % 2 === 0 ? "Par" : "Impar";
  }
}
</script>

<style></style>
