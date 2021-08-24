<template>
  <div id="about">
    <v-container>
      <v-row class="d-flex align-center mt-10">
        <v-col cols="12" md="6">
          <h1 class="opening-title">My Bio</h1>
          <p>
            I really enjoy programming. I started about a decade ago when I was
            working for a startup tech company. I wouldn’t leave the developers
            alone, showing up to work early just to hang out in the same room as
            them. One day, the lead developer gave me a task to build the 404
            page. It was simple, HTML and CSS. I spent the whole night learning
            how to build a basic web page. I came back the next morning to show
            what I had created, and to my surprise, they used it. I was so happy
            to have created something from nothing. And from that moment I was
            hooked.
          </p>
          <p>
            Since then I have spent many hours learning all I can about
            programming and computers. I started my own company so that I could
            code all day and work on a variety of different projects. I started
            out building wordpress sites and small applications using
            Javascript. I still use Javascript everyday and would now consider
            myself a solid front end web developer.
          </p>
          <p>
            After a few years on my own, I closed the company and started
            working for an agency where I built websites using a proprietary
            CMS. It wasn’t my favorite, but it kept me in the industry and I was
            able to branch out to help the DevOps team. They were using Nuxt
            (VueJS) to build automation tools and to provide reports for our
            Project Managers. It was there that I learned more about the backend
            of web development. I was using Postgres and GraphQL to do basic
            CRUD operations. We were deploying on Heroku and using Git for
            version control.
          </p>
        </v-col>
        <v-col cols="12" md="6" class="d-none d-md-block">
          <v-img
            class="ma-8 home-graphic"
            src="@/assets/programmerGraphic.svg"
            contain
          ></v-img>
        </v-col>
        <v-col cols="12">
          <Quote
            quote="Knowing is not enough, we must apply. Willing is not enough, we must do."
            author="Bruce Lee"
          />
        </v-col>
        <v-col cols="12" class="pb-10">
          <h2>Bio Continued...</h2>
          <p>
            At the same time I was freelancing and working with noSQL, using
            Google Firebase, a document based backend. I was creating small
            applications to help local businesses and also making apps for a
            committee I was on at the agency. My claim to fame there was a
            volunteer hours tracking application I built to promote community
            involvement within the company.
          </p>
          <p>
            When the pandemic started, the company allowed us all to work from
            home. My wife and I decided to take this opportunity to sell our
            home and buy an RV to travel the US. I ended up leaving the company
            shortly after and have been freelancing while on the road, and day
            trading with some of the money we made from the house sale. It has
            been a very eventful year, to say the least.
          </p>
          <p>
            I don’t want to give the impression that I sit behind a computer all
            day. I am also very into fitness and health. I love to volunteer,
            play hockey, and lately I have been getting into the game of chess.
            My hobbies are seemingly endless and managing my time is very
            important. Before COVID I was rock climbing daily, I was a volunteer
            coach for the youth hockey team, I liked to mountain bike, and I
            played hockey about three times a week. My wife and I would foster
            dogs from a local shelter, I would manage their website, and we
            would put on foster events.
          </p>
          <p>
            Since being on the road, life has been much more quiet. I traded in
            the hockey skates for a skateboard, but I still love to code and
            tinker with my Raspberry Pis. I am often reading or playing chess,
            and I am always building something.
          </p>
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
  components: { ProjectsPreview, Quote },
};
</script>

<style lang="scss" scoped>
.opening-title {
  font-size: 4em;
}
</style>
