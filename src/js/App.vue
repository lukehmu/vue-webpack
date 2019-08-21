<template>
  <div id="app">
    <v-app>
      <v-app-bar
        app
        clipped-left
      >
        <v-toolbar-title>
          <v-btn
            color="deep-purple accent-2"
            to="/"
          >
            Home - Vue Router with CraftQL
          </v-btn>
        </v-toolbar-title>
      </v-app-bar>

      <v-content>
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex shrink>
              <transition
                name="fade"
                appear
                mode="out-in"
              >
                <router-view></router-view>
              </transition>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-footer app>
        <v-col
          class="text-center"
        >
          <a
            class="white--text"
            href="https://github.io/lukehmu"
          >lukehmu's Github</a>
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
}
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
