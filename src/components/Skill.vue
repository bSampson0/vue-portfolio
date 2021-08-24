<template>
  <div class="skill" style="width: 100%">
    <v-row align="center">
      <v-col> {{ skillName }} </v-col>
      <v-col>
        <span><v-progress-linear :value="skillValue"></v-progress-linear></span>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    skillName: {
      type: String,
      default: "HTML",
    },
    skillValue: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style lang="scss" scoped></style>
