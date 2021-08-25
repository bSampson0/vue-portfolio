<template>
  <div id="contact">
    <v-container>
      <v-row class="mt-10 mb-8">
        <v-col>
          <h1>Contact Me</h1>
          <p>Use the form below to get a hold of yours truly.</p>
        </v-col>
      </v-row>
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-card shaped elevation="8" class="pa-4">
            <v-card-title>Contact Form</v-card-title>
            <v-card-subtitle>You know what to do.</v-card-subtitle>
            <v-card-text>
              <v-form ref="contact" v-model="valid" lazy-validation>
                <v-text-field
                  outlined
                  v-model="name"
                  label="Name"
                  :rules="nameRules"
                  required
                ></v-text-field>
                <v-text-field
                  outlined
                  v-model="email"
                  label="Email"
                  :rules="emailRules"
                  type="email"
                  required
                ></v-text-field>
                <v-textarea
                  outlined
                  label="Message"
                  v-model="message"
                  :rules="messageRules"
                  required
                ></v-textarea>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn width="100%" @click="send" :disabled="!valid">
                Send
                <v-icon right dark> mdi-send </v-icon>
              </v-btn>
            </v-card-actions>
            <div class="message-return" v-if="messageSent">
              {{ successMessage }}
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <h2>Contact Info</h2>
          <p>
            <strong>Email:</strong> Bnicerrr@gmail.com <br />
            <strong>Github: </strong>
            <a href="https://github.com/bSampson0" target="_blank"
              >https://github.com/bSampson0</a
            ><br />
            <strong>LinkedIn: </strong>
            <a
              href="https://www.linkedin.com/in/bryce-sampson-344177b0/"
              target="_blank"
              >https://www.linkedin.com/in/bryce-sampson-344177b0/</a
            ><br />
            <strong>Codepen: </strong>
            <a href="https://codepen.io/bSampson0" target="_blank">
              https://codepen.io/bSampson0
            </a>
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { db } from "@/plugins/firebase";
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      successMessage: "",
      messageSent: false,
      valid: false,
      emailRules: [
        (v) => !!v || "How do I reach you?",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      nameRules: [(v) => !!v || "What is your name?"],
      messageRules: [(v) => !!v || "You have to leave a message!"],
    };
  },
  methods: {
    async send() {
      if (this.valid) {
        try {
          await db.collection("messages").add({
            name: this.name,
            email: this.email,
            message: this.message,
          });
          this.successMessage = "Your message has been sent.";
        } catch (error) {
          console.log(error);
          this.successMessage = "Your message failed to send.";
        }
      }
      this.messageSent = true;
      this.$refs.contact.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
#contact h1 {
  font-size: 4em;
}
</style>
