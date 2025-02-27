let VueCache = window.Vue || null;

export async function resolveVue() {
  if (!VueCache && !resolveVue.resolvePromising) {
    resolveVue.resolvePromising = import("vue/dist/vue.esm-bundler.js").then(
      (Vue) => {
        VueCache = Vue;
        return VueCache;
      }
    );
    return resolveVue.resolvePromising;
  }
  return VueCache || resolvePromising;
}

export default VueCache;
