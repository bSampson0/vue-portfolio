<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-center my-title">Recent Projects</h2>
          <p class="text-center">
            Can't stop, won't stop. So many projects, so little time.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="4"
          v-for="project in projects"
          :key="project.title"
        >
          <v-card>
            <v-img
              :src="require(`../assets/projects/${project.img}`)"
              height="200px"
            ></v-img>
            <v-card-title>
              {{ project.title }}
            </v-card-title>
            <v-card-subtitle>
              {{ project.language }}
            </v-card-subtitle>
            <v-card-text>
              {{ project.description }}
            </v-card-text>
            <v-card-actions>
              <v-btn :href="project.link" target="_blank"> View More </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Minecraft Photo Competitions",
          language: "VueJS - Google Firebase",
          description:
            "This project is for a group of friends who host a minecraft server. They wanted to be able to have photo contests. I am using Google Firebase for the backend. Auth, Storage, Functions and the Firestore. For the front end I am using Vuetify. When a contest is created or there is a submission, a message is sent to a Discord server.",
          link: "https://minecraft-photo-comp.netlify.app/",
          img: "minecraft.png",
        },
        {
          title: "Weather Bug",
          language: "VueJS - Vuetify - Axios",
          description:
            "This project pulls data from a weather api. I wanted a project using Axios and was inspired by some of the compenents on the Vuetify web page. The project is built with Vuetify and uses axios to fetch the data.",
          link: "https://codepen.io/bSampson0/full/BaNmRZW",
          img: "weather.png",
        },
        {
          title: "Pokemon with ChartJS",
          language: "Vanilla Javascript - ChartJS",
          description:
            "I wanted to try out Chart JS for another project I was working for work. My little sister is also very into pokemon, so I use that as a source of inspiratoin. I am pulling the data with Axios.",
          link: "https://codepen.io/bSampson0/full/xxxpRJw",
          img: "pokemon.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.my-title {
  font-size: 2.5em;
}
</style>
