<template>
  <div>
    <v-card>
      <v-img :src="img" height="200px" contain></v-img>
      <v-card-title>{{ name }}</v-card-title>
      <v-card-subtitle>
        <span v-for="(lang, i) in languages" :key="i"> {{ lang }} |</span>
      </v-card-subtitle>
      <v-card-text>
        {{ summary }}
      </v-card-text>
      <v-card-actions class="ma-2">
        <v-btn color="primary" :href="liveUrl" text target="_blank"
          ><v-icon class="mr-3">mdi-eye</v-icon>See it Live</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn color="accent" text :href="codeUrl" target="_blank"
          ><v-icon class="mr-3">mdi-code-tags</v-icon>View Code</v-btn
        >
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Project Name",
    },
    summary: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    description: {
      type: String,
      default:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    languages: {
      type: Array,
    },
    img: {
      type: String,
      default: "http://via.placeholder.com/300",
    },
    codeUrl: {
      type: String,
      default: "https://github.com/bSampson0",
    },
    liveUrl: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
