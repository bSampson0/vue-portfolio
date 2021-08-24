<template>
  <div id="certs">
    <v-card>
      <v-card-text>
        <v-row align="center">
          <v-col cols="2">
            <v-icon>mdi-flash</v-icon>
          </v-col>
          <v-col cols="10">
            {{ courseTitle }} <br />
            {{ courseHost }}
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    courseTitle: {
      type: String,
      default: "Javascript",
    },
    courseHost: {
      type: String,
      default: "Udemy",
    },
  },
};
</script>

<style lang="scss" scoped></style>
