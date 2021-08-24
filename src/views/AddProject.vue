<template>
  <div>
    <v-container class="mt-12">
      <v-row>
        <v-col cols="12" sm="12">
          <div class="intro text-center">
            <h1>Add Project</h1>
            <p>Use the form below to add a project.</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="10" md="8" lg="6" class="mx-auto">
          <v-card class="pa-4">
            <v-card-title>New Project</v-card-title>
            <v-card-text>
              <v-form ref="projectForm" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="name"
                  label="Project Name"
                  outlined
                  required
                ></v-text-field>
                <v-textarea
                  outlined
                  clearable
                  clear-icon="mdi-close-circle"
                  v-model="summary"
                  label="Short Description"
                  rows="2"
                  required
                ></v-textarea>
                <v-textarea
                  outlined
                  clearable
                  clear-icon="mdi-close-circle"
                  v-model="description"
                  label="Long Description"
                  rows="4"
                  required
                ></v-textarea>
                <v-select
                  outlined
                  v-model="languages"
                  :items="items"
                  label="Technologies"
                  multiple
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index === 0">
                      <span>{{ item }}</span>
                    </v-chip>
                    <span v-if="index === 1" class="grey--text text-caption">
                      (+{{ languages.length - 1 }} others)
                    </span>
                  </template>
                </v-select>
                <v-text-field
                  v-model="liveUrl"
                  label="Live Url"
                  outlined
                  required
                ></v-text-field>
                <v-text-field
                  v-model="codeUrl"
                  label="Source Code Url"
                  outlined
                  required
                ></v-text-field>
                <v-file-input
                  outlined
                  accept="image/*"
                  v-model="img"
                  placeholder="Upload your documents"
                  label="Add Screenshot"
                  prepend-icon="mdi-paperclip"
                  @change="uploadImage"
                >
                  <template v-slot:selection="{ text }">
                    <v-chip small label color="primary">
                      {{ text }}
                    </v-chip>
                  </template>
                </v-file-input>
                <v-progress-linear
                  :active="loading"
                  :indeterminate="loading"
                  absolute
                  bottom
                  color="secnodary"
                ></v-progress-linear>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn :disabled="uploaded" @click="submit"> Submit </v-btn>
            </v-card-actions>
            <v-card-text v-if="success"> Submitted Succesfully </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db, storage } from "../plugins/firebase";
export default {
  data() {
    return {
      name: "",
      summary: "",
      description: "",
      languages: [],
      success: false,
      items: [
        "Javascript",
        "Vue.JS",
        "React",
        "Express",
        "Nodemailer",
        "Firebase",
        "Functions",
        "Auth",
        "Storage",
        "AWS",
        "Docker",
        "Kubernetes",
        "Chart.JS",
        "Node.JS",
        "Postgres",
        "Heroku",
        "Netlify",
      ],
      img: null,
      imgURL: "",
      submitted: false,
      uploaded: true,
      loading: false,
      valid: false,
    };
  },
  methods: {
    async submit() {
      console.log("submitting...");
      try {
        await db.collection("projects").add({
          name: this.name,
          languages: this.languages,
          summary: this.summary,
          description: this.description,
          img: this.imgURL,
          uploadDate: new Date().toLocaleDateString("en-US"),
          liveUrl: this.liveUrl,
          codeUrl: this.codeUrl,
        });
        this.success = true;
      } catch (error) {
        console.log(error);
      }
      this.$refs.projectForm.reset();
    },
    async uploadImage() {
      const uploadTask = storage.ref().child(this.img.name).put(this.img);
      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          this.loading = true;
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            this.imgURL = downloadURL;
            this.uploaded = false;
            this.loading = false;
          });
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
