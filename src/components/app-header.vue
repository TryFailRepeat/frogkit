<style lang="stylus">
  @require '../stylus/mixins/app-header'

  .fk-app-header
    app-header-mixin()

</style>

<template>
  <Flex>
    <Grid>
      <Col xs12>
      <header class="fk-app-header">
        <div class="fk-app-header__container">
          <!-- logo -->
          <h1 class="fk-app-header__logo" pid="header_button_home">
            <a :href="logoUrl" aria-label="app">
              <Icon :icon="logoIcon" />
            </a>
          </h1>
          <!-- navigation -->
          <nav class="fk-app-header__nav">
            <!-- all cameras -->
            <div class="fk-app-header__cam" pid="header_button_all_cameras">
              <a v-if="navigations[0]" :href="navigations[0].url" :aria-label="navigations[0].label">
                <Icon :icon="cameraIcon" :alt="navigations[0].label" /> {{ navigations[0].label }}</a>
              <div class="fk-app-header__cam__nav">
              </div>
            </div>
            <!-- my account -->
            <a v-if="navigations[1]" :href="navigations[1].url" class="fk-app-header__account" pid="header_button_my_account" :aria-label="navigations[1].label" >
              <Icon icon="account" :alt="navigations[1].label"/> {{ navigations[1].label }}</a>
            <!-- shop button -->
            <Button v-if="navigations[2]" link color="secondary" size="small" class="fk-app-header__btn-shop" :href="navigations[2].url" pid="header_button_shop" :aria-label="navigations[2].label">
              {{ navigations[2].label }}
            </Button>

            <!-- cart button 
            <Button link color="secondary" size="small" class="fk-app-header__cart" :href="navigations[3].url" aria-label="cart">
                <Icon icon="basket" alt="cart"/>
                <span v-if="cartCounter > 0" class="fk-header__btn-cart__counter">{{ cartCounter }}</span>
            </Button>
            -->

            <!-- current user -->
            <div class="fk-app-header__user">
              <span>{{ username }}</span>
            </div>
            <!-- logout -->
            <div v-if="logoutlabel" class="fk-app-header__logout" @click="logout()">
              <Icon icon="angle-down" :alt="logoutlabel" /> {{ logoutlabel }}
            </div>
            <!-- language selector -->
            <div v-if="activeLang" class="fk-app-header__lang" :class="{ 'fk-app-header__lang--on': toggleLangList}" @click="toggleDropdown">
              {{ activeLang }}
              <Icon icon="angle-down" />
              <ul v-if="toggleLangList" v-click-outside="closeDropDown">
                <li v-for="lang in languages" :key="lang.code" @click="changeLang(lang.code)">
                  {{ lang.name }}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      </Col>
    </Grid>
  </Flex>
</template>

<script>
    import clickOutside from '../directives/click-outside'

    export default {
        name: 'AppHeader',
        directives: {
            clickOutside
        },
        props: {
            logoUrl: {
                type: String,
                default: '/'
            },
            navigations: {
                type: Array,
                default: () => []
            },
            username: {
                type: String,
                default: ''
            },
            activeLang: {
                type: String,
                default: ''
            },
            logoutlabel: {
                type: String,
                rdefault: ''
            },
            languages: {
                type: Array,
                default: () => []
            },
            logoIcon: {
                type: String,
                default: 'logo-small'
            },
            cameraIcon: {
                type: String,
                default: 'camera'
            },
            cartCounter: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                toggleLangList: false
            }
        },
        methods: {
            logout () {
                this.$emit('logout')
            },
            changeLang (langCode) {
                this.$emit('changeLanguage', langCode)
            },
            toggleDropdown() {
                this.toggleLangList = !this.toggleLangLis
            },
            closeDropDown() {
                this.toggleLangList = false
            }
        }
    }
</script>
