<template>
  <nuxt/>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

@font-face {
  font-family: "arame-regular";
  src: url("~/assets/fonts/arame-regular.woff") format("woff")
}
@font-face {
  font-family: "rational-light";
  src: url("~/assets/fonts/rational-light.woff") format("woff")
}

.row {
  display: flex;
}
.column {
  flex: 1;
}
</style>
