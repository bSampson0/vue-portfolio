<template>
  <div>
    <v-footer padless color="transparent" class="mt-10">
      <v-container class="mt-10">
        <v-row align="center">
          <v-col cols="10"> Created by: Bryce Sampson | 2021 </v-col>
          <v-col cols="2">
            <a href="https://github.com/bSampson0">
              <v-img
                src="@/assets/github-white.svg"
                contain
                width="20px"
                class="ml-auto"
              ></v-img>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
