<template>
  <base-example class="q">

  ```scss
    qwe
  ```

  </base-example>
</template>

<script>
  import BaseExample from './base-example.vue';
  import MarkdownComponent from './markdown-component.vue';

  export default {
    name: 'example-aspect-ratio',
    components: {MarkdownComponent, BaseExample},
  }

</script>

<style lang="scss">
  .q {
    padding: 20px;
    background: red;
  }
</style>
