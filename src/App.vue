<template>
  <RouterView />
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  #app {
    .size;
  }
}
</style>
