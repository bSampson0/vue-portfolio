<template>
  <div id="home" class="mb-12">
    <v-container>
      <v-row class="d-flex align-center mt-12">
        <v-col cols="12" md="6">
          <h1 class="opening-title">Full Stack Developer</h1>
          <p>
            I built this site for one reason, to show off what I love doing.
            Building super clean websites! What started out as a one off project
            (design a 404 page), quickly became an obsession. Everyday I am
            working on something to improve my skillset as a developer. I really
            enjoy Javascript and working with front end frameworks like Vue and
            React. I typically use Google services to host projects and have
            experience using AWS. SQL or noSQL, doesn't matter. I love them all!
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
            quote="Programming is like kicking yourself in the face, sooner or later your nose will bleed."
            author="Kyle Woodbury"
          />
        </v-col>
      </v-row>
    </v-container>
    <ProjectsPreview />
  </div>
</template>

<script>
import ProjectsPreview from "@/components/ProjectsPreview.vue";
import Quote from "@/components/Quote.vue";
export default {
  name: "Home",
  components: {
    ProjectsPreview,
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
