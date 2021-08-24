<template>
  <div>
    <v-container class="fill-height pt-12">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8" lg="6">
          <v-form ref="login">
            <v-card class="pa-4">
              <v-card-title>Admin Login</v-card-title>
              <v-card-subtitle
                >Use the form to login. If you do not have a login, contact
                someone who is and have them add you.</v-card-subtitle
              >
              <v-card-text>
                <v-text-field
                  outlined
                  v-model="email"
                  label="Email"
                  color="primary lighten-2"
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model="pw"
                  label="Password"
                  type="password"
                  color="secondary lighten-2"
                ></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn @click="login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      pw: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        pw: this.pw,
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
