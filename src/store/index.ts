import type { App } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

const piniaStore = createPinia();

piniaStore.use(piniaPluginPersist);

export const setupStore = (app: App<Element>) => {
  app.use(piniaStore);
};

export { piniaStore as store };
