<template>
  <v-app id="app">
    <Navigation />
    <v-main>
      <transition transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Navigation, Footer },
  name: "App",
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: "Abel", sans-serif;
  background: #16222a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3a6073,
    #16222a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3a6073,
    #16222a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
h1,
h2,
h3,
h4,
h5,
h6,
Button {
  font-family: "Audiowide", cursive;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
a {
  text-decoration: none;
}
</style>
