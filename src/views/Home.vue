<template>
  <div id="home" class="mb-12">
    <v-container>
      <v-row class="d-flex align-center mt-12">
        <v-col cols="12" md="6">
          <h1 class="opening-title">Full Stack Developer</h1>
          <p>
            I built this site for one reason, to show off what I love doing.
            Building super clean websites! What started out as a one off project
            (design a 404 page), quickly became an obsession. Now, Everyday I am
            working on something to improve my skillset as a developer. Over the 
            course of my carreer I have been able to work with many different languages
            and now consider my self language-agnostic, understanding that each language
            has it's own strengths and weaknesses. Frontend or backend, I find joy in
            working with all aspects of software developement.
          </p>
          <v-btn large color="primary" to="/contact">Contact Me</v-btn>
        </v-col>
        <v-col cols="12" md="6" class="d-none d-md-block">
          <v-img
            class="ma-8 home-graphic"
            src="@/assets/homeGraphic.svg"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mt-12 mb-12">
      <v-row>
        <v-col>
          <Quote
            quote="If I had an hour to solve a problem I'd spend 55 minutes thinking about the problem and 5 minutes thinking about solutions."
            author="Albert Einstein"
          />
        </v-col>
      </v-row>
    </v-container>
    <!-- <ProjectsPreview /> -->
  </div>
</template>

<script>
import Quote from "@/components/Quote.vue";
export default {
  name: "Home",
  components: {
    Quote,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.opening-title {
  font-size: 4em;
  line-height: 60px;
  padding-bottom: 20px;
}
.home-graphic {
  animation: up-down 3s infinite alternate linear;
}
@keyframes up-down {
  from {
    transform: translateY(7px);
  }
  to {
    transform: translateY(-7px);
  }
}
</style>
