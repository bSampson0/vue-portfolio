<template>
  <div id="resume">
    <v-container class="mt-12 mb-12">
      <v-row class="mb-10" align="center">
        <v-col cols="12" sm="8" lg="6">
          <h1>Biography</h1>
          <p>
            I really enjoy programming. I started about a decade ago when I was
            working for a startup tech company. I wouldn’t leave the developers
            alone, showing up to work early just to hang out in the same room as
            them. One day, the lead developer gave me a task to build the 404
            page. It was simple, HTML and CSS. <br /><br />
            I spent the whole night learning how to build a basic web page. I
            came back the next morning to show what I had created, and to my
            surprise, they used it. I was so happy to have created something
            from nothing. And from that moment I was hooked.
          </p>
        </v-col>
        <v-col cols="12" sm="4" class="d-none d-sm-block">
          <v-img
            class="bio-image"
            height="280px"
            contain
            src="@/assets/bryceAndBri.jpg"
          ></v-img>
        </v-col>
        <v-col cols="12" md="2" class="personal-info d-none d-lg-block">
          <h3>Personal Info</h3>
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
          <br /><br />
          <v-btn text color="primary" download href="bryce_fullstack_resume.pdf"
            ><v-icon x-small class="mr-3">mdi-download</v-icon>Download
            Resume</v-btn
          >
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h2>Experience <span style="font-size: 0.5em">so far.</span></h2>
          <v-divider></v-divider>
          <v-timeline :dense="txt < 960 ? true : false">
            <span v-for="(job, i) in jobs" :key="i">
              <Timeline
                :companyTime="job.companyTime"
                :companyName="job.companyName"
                :jobTitle="job.jobTitle"
                :jobDescription="job.jobDescription"
                :companyUrl="job.companyUrl"
              />
            </span>
          </v-timeline>
        </v-col>
        <v-col>
          <h2>
            Education <span style="font-size: 0.5em">is most important.</span>
          </h2>
          <v-divider></v-divider>
          <v-timeline :dense="txt < 960 ? true : false">
            <span v-for="(school, i) in schools" :key="i">
              <Timeline
                :companyTime="school.companyTime"
                :companyName="school.companyName"
                :jobTitle="school.jobTitle"
                :jobDescription="school.jobDescription"
                :companyUrl="school.companyUrl"
              />
            </span>
          </v-timeline>
        </v-col>
      </v-row>
      <v-row class="mt-12 mb-12">
        <v-col cols="12">
          <h2>
            Skills <span style="font-size: 0.5em">that pay the bills.</span>
          </h2>
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" sm="4">
          <h4>Front End</h4>
          <v-divider class="mb-2 mt-1"></v-divider>
          <span v-for="(skill, i) in frontEndSkills" :key="i">
            <Skill
              :skillName="skill.skillName"
              :skillValue="skill.skillValue"
            />
          </span>
        </v-col>
        <v-col cols="12" sm="4">
          <h4>Back End</h4>
          <v-divider class="mb-2 mt-1"></v-divider>
          <span v-for="(skill, i) in backEndSkills" :key="i">
            <Skill
              :skillName="skill.skillName"
              :skillValue="skill.skillValue"
            />
          </span>
        </v-col>
        <v-col cols="12" sm="4">
          <h4>Miscellaneous</h4>
          <v-divider class="mb-2 mt-1"></v-divider>
          <span v-for="(skill, i) in miscSkills" :key="i">
            <Skill
              :skillName="skill.skillName"
              :skillValue="skill.skillValue"
            />
          </span>
        </v-col>
      </v-row>
      <v-row class="mt-12 mb-12">
        <v-col cols="12" class="mt-10">
          <h2>
            Certificates / Classes
            <span style="font-size: 0.5em">always grinding.</span>
          </h2>
          <v-divider class="mb-4"></v-divider>
          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
              v-for="(course, i) in courses"
              :key="i"
            >
              <Certs
                :courseTitle="course.courseTitle"
                :courseHost="course.courseHost"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Timeline from "@/components/Timeline.vue";
import Skill from "@/components/Skill.vue";
import Certs from "@/components/Certs.vue";

export default {
  components: {
    Timeline,
    Skill,
    Certs,
  },
  data() {
    return {
      jobs: [
        {
          companyName: "G5",
          jobDescription:
            "Work with project and account managers to add functionality to existing websites. Responsible for making sure microservices are working smoothly and that data is being pulled correctly from various APIs using Postman. Work closely with Digital Advertising team on GTM containers for tracking lead events. Work on internal tooling for Pro Services department (JS, VueJS) and using selenium to automate test scripts.",
          companyUrl: "https://www.getg5.com/",
          jobTitle: "Website Implementation Specialist",
          companyTime: "Oct. 2018 - Nov. 2020",
        },
        {
          companyName: "MarCo Media",
          jobDescription:
            "Created web-based applications for clients using Vue and React (Nuxt/Next). Primarily use Material or Bootstrap for CSS. Have worked individually and as part of a team to finish projects for various industries.",
          companyUrl: "https://www.mediamarco.com/",
          jobTitle: "Owner / Operator",
          companyTime: "May 2016 - Dec. 2020",
        },
        {
          companyName: "Mazama Media",
          jobDescription:
            "Oversaw the development and implementation of marketing campaigns on social media platforms. Responsible for content creation using adobe products. Responsible for training of employees.",
          companyUrl: "https://www.mazamamedia.com/",
          jobTitle: "General Manager",
          companyTime: "Apr. 2014 - May 2016",
        },
      ],
      schools: [
        {
          dotColor: "primary",
          companyName: "Frostburg State University",
          jobDescription:
            "Studied Environmental Analysis and Planning. Joined Pi Lambda Phi fraternity. Join the Latin American Student Orginization. Was a teaching assistant for Surveying course. Worked on a project with the Hannou Group to map the Illinois Coal Basin (cartography).",
          companyUrl: "https://www.frostburg.edu/",
          jobTitle: "BS in Environmental Analysis & Planning",
          companyTime: "Aug. 2008 - May 2012",
        },
      ],
      frontEndSkills: [
        {
          skillName: "Vue",
          skillValue: 85,
        },
        {
          skillName: "React",
          skillValue: 75,
        },
        {
          skillName: "Vanilla Javascript",
          skillValue: 80,
        },
        {
          skillName: "Bootstrap",
          skillValue: 80,
        },
        {
          skillName: "Material UI",
          skillValue: 90,
        },
        {
          skillName: "HTML",
          skillValue: 85,
        },
        {
          skillName: "CSS",
          skillValue: 80,
        },
      ],
      backEndSkills: [
        {
          skillName: "Express",
          skillValue: 80,
        },
        {
          skillName: "Postgres",
          skillValue: 75,
        },
        {
          skillName: "MongoDB",
          skillValue: 85,
        },
        {
          skillName: "Google Firebase",
          skillValue: 90,
        },
        {
          skillName: "AWS",
          skillValue: 40,
        },
        {
          skillName: "Java",
          skillValue: 68,
        },
        {
          skillName: "Git",
          skillValue: 80,
        },
      ],
      miscSkills: [
        {
          skillName: "Docker",
          skillValue: 68,
        },
        {
          skillName: "Kubernetes",
          skillValue: 60,
        },
        {
          skillName: "Selenium",
          skillValue: 72,
        },
        {
          skillName: "Photoshop",
          skillValue: 82,
        },
        {
          skillName: "Illustrator",
          skillValue: 87,
        },
        {
          skillName: "After Effects",
          skillValue: 55,
        },
        {
          skillName: "Coffee Making",
          skillValue: 99,
        },
      ],
      courses: [
        {
          courseTitle: "Vue - The Complete Guide",
          courseHost: "Udemy",
        },
        {
          courseTitle: "Django & Python",
          courseHost: "Udemy",
        },
        {
          courseTitle: "Selenium with Java",
          courseHost: "Udemy",
        },
      ],
      windowWidth: window.innerWidth,
      txt: null,
    };
  },
  watch: {
    windowWidth(newWidth) {
      this.txt = `${newWidth}`;
    },
  },

  mounted() {
    this.txt = window.innerWidth;
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
#resume h1 {
  font-size: 4em;
}
#resume h2 {
  font-size: 2em;
}
.bio-image {
  filter: drop-shadow(0 0 0.75rem #181818);
}
</style>
