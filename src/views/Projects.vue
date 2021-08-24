<template>
  <div>
    <v-container class="mt-12">
      <v-row>
        <v-col cols="12">
          <div class="intro">
            <h1>Projects</h1>
            <p>
              Here you can find some of the projects I have worked on over the
              years. Some are more complex than others, and they range from full
              builds, to simple coding challenges. Each should be a little bit
              different and hopefully show the range of abilities I possess.
              Enjoy.
            </p>
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-10 mb-10"></v-divider>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="4"
          v-for="(project, i) in projects"
          :key="i"
        >
          <Project
            :name="project.name"
            :summary="project.summary"
            :languages="project.languages"
            :img="project.img"
            :codeUrl="project.codeUrl"
            :liveUrl="project.liveUrl"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Project from "@/components/Project.vue";
import { db } from "../plugins/firebase";
export default {
  components: { Project },
  data() {
    return {
      projects: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const projectRef = db.collection("projects");
      try {
        await projectRef.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.data);
            this.projects.push(doc.data());
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.intro h1 {
  font-size: 4em;
}
</style>
