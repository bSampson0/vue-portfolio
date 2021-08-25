<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list-item>
        <v-list-item-content>
          <v-img contain height="50px" src="logoIcon.svg" class="mb-2"></v-img>
          <v-list-item-title class="text-h6 text-center">
            My Portfolio
          </v-list-item-title>
          <v-list-item-subtitle class="text-center">
            Welcome to my site.
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="transparent" elevation="0">
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        class="d-sm-none"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><span class="logo-title">Bryce Sampson</span></v-toolbar-title
      >

      <v-spacer> </v-spacer>

      <div
        class="nav-items d-none d-sm-block"
        v-for="item in items"
        :key="item.title"
      >
        <v-btn class="ml-1 mr-1" text :to="item.link">{{ item.title }}</v-btn>
      </div>
      <div>
        <template v-if="loginState">
          <v-btn color="primary" class="ml-4" @click="logout">Logout</v-btn>
        </template>
        <template v-else>
          <v-btn color="accent" class="ml-4" to="/login">Login</v-btn>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Home", icon: "mdi-home", link: "/" },
      // { title: "About", icon: "mdi-information", link: "/about" },
      { title: "Projects", icon: "mdi-view-dashboard", link: "/projects" },
      { title: "Resume", icon: "mdi-file", link: "/resume" },
      { title: "Contact", icon: "mdi-card-account-mail", link: "/contact" },
    ],
  }),
  computed: {
    loginState() {
      return this.$store.state.user;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-title {
  font-family: "Stalemate", cursive;
  font-size: 2em;
}
</style>
