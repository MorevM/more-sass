<template>
  <div id="app">
    <div class="aspect-ratio"></div>
    <div class="box"></div>
    <div class="border-radius"></div>
    <div class="br">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>

    <div class="clearfix">
      <div class="clearfix-item"></div>
      <div class="clearfix-element"></div>
    </div>
  </div>
</template>

<script>
  export default {
	  components: {},
    data: () => ({}),
    methods: {},
  }
</script>

<style lang="scss">
  @use '../../src/index.scss' as *;

  #app > * { margin-bottom: 30px; }

  .aspect-ratio {
    width: 200px;
    background: red;

    &::before{
      @include aspect-ratio(2, 1);
    }
  }

  .box {
    @include box(200px, 100px);
    background: blue;
  }

  .border-radius {
    @include box(200px);
    background: rebeccapurple;
    @include border-radius(10px);
  }

  .br {
    background: red;
    @include br-hide;
  }

  .clearfix {
    // @include clearfix;
    background: green;

    @debug to-number('16px');
    // @include font('100 /1.5 Montserrat');

    &-item {
      float: left;
      height: 200px;
    }

    &-element {
      @include clearfix-element;
    }
  }
</style>
