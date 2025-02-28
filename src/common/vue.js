import externalVue from "vue";

export async function resolveVue() {
  if (!externalVue && !resolveVue.resolvePromising) {
    resolveVue.resolvePromising = import("vue/dist/vue.esm-bundler.js").then(
      (Vue) => {
        externalVue = Vue;
        return externalVue;
      }
    );
    return resolveVue.resolvePromising;
  }
  return externalVue || resolvePromising;
}
