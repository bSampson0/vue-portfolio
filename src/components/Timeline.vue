<template>
  <div class="timeline">
    <v-timeline-item small fill-dot :color="dotColor">
      <template v-slot:opposite>
        <span style="font-size: 1.5em">{{ companyTime }}</span>
      </template>
      <div class="py-4">
        <v-card color="transparent">
          <v-card-text>
            <h2 class="headline font-weight-light mb-4">
              {{ companyName }} - {{ jobTitle }}
            </h2>
            <div class="dates d-md-none">
              {{ companyTime }}
            </div>
            <div>
              {{ jobDescription }}
            </div>
            <div>
              <br />
              <a :href="companyUrl">
                <v-icon x-small>mdi-link</v-icon> {{ companyUrl }}
              </a>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </v-timeline-item>
  </div>
</template>

<script>
export default {
  props: {
    companyTime: {
      type: String,
      default: "2018 - 2020",
    },
    companyName: {
      type: String,
      default: "MarCo Media",
    },
    jobTitle: {
      type: String,
      default: "Web Developer",
    },
    jobDescription: {
      type: String,
      default: "Did stuff.",
    },
    companyUrl: {
      type: String,
      default: "https://google.com",
    },
    dotColor: {
      type: String,
      default: "transparent",
    },
  },
};
</script>

<style lang="scss" scoped></style>
