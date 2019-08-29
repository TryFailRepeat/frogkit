<style lang="stylus">
  @require '../stylus/mixins/solo-header'

  .solo-header
    soloheader-mixin()

</style>

<template functional>
  <header class="solo-header">
    <div class="solo-header__container">
      <h1 class="solo-header__container__logo">
        <a :href="props.logoUrl"><img :src="props.logoImageSrc" :alt="props.logoAlt" /></a>
      </h1>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Soloheader',
    props: {
      logoUrl: {
          type: String,
          default: '/'
      },
      logoImageSrc: {
        type: String,
        default: require('../assets/logo.svg')
      },
      logoAlt: {
        type: String,
        default: 'smartfrog-logo'
      }
    }
  }
</script>
