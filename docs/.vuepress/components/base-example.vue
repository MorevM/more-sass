<template>
  <div class="base-example">
    <div class="base-example__col base-example__col--scss">
      <slot name="scss"></slot>
    </div>

    <div class="base-example__col base-example__col--css">
      <slot name="css"></slot>
    </div>
  </div>
</template>

<script>
  import MarkdownComponent from './markdown-component.vue';

  export default {
    name: 'base-example',
    components: {MarkdownComponent},
    data: () => ({}),
  }
</script>

<style lang="scss" src="./base-example.scss"></style>
