<script setup>
  import SvgIcon from '@jamescoyle/vue-icon'
  import {mdiCrownOutline, mdiGithub, mdiInstagram, mdiLinkedin, mdiTwitter, mdiWeatherNight } from '@mdi/js'

  const firtsPage = {

    name: {
      firstName: "AHMAD",
      lastName: "RIDHO"
    },

    description: "Junior programmer who is interested in full stack development such as HTML, CSS Framework, JavaScript Framework, PHP, and SQL and loves cats. Currently studying at UIR majoring in Informatics Engineering for four semesters.",

    socialLink: {
      ig: "http://instagram.com/amd.rydho26/",
      github: "https://github.com/amdrydho26",
      x: "https://x.com/AmdRydho26?t=D-JZUxoZo50VVLdisMEwPw&s=09",
      linkedin: "https://www.linkedin.com/in/ahmadridho26?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }

  };

  const secondPage = [

    {title: "UI/UX Design", description: "Creating aesthetically pleasing interfaces and intuitive user experiences. Focused on wireframing, prototyping, and usability testing."},

    {title: "Front End Dev", description: "Transforming UI/UX designs into interactive, responsive web interfaces using HTML, CSS, JavaScript, and modern frameworks."},

    {title: "Back End Dev", description: "Developing secure, scalable systems with optimized databases, efficient APIs, and robust authentication. Ensuring high performance and reliability."}

  ];

  const footer = "2025 Ahmad Ridho. All right reserved";

</script>

<template>
  <div class="bg-grey-darken-4 ">

    <header style="z-index: 9999;" class="position-sticky top-0 left-0 right-0 bg-grey-darken-4 pt-8 pb-7">
        <nav class="w-75 d-flex flex-row justify-space-between mx-auto">

          <div class="text-h5"> 
            <a href="">
              <span class="pr-1 font-weight-bold text-white">{{ firtsPage.name.firstName }}</span>
              <span class="font-weight-light text-blue-lighten-1">{{ firtsPage.name.lastName }}</span>
            </a>
          </div>

          <div class="d-flex align-center">
            <a href="" class="px-2"><span>services</span></a>
            <a href="" class="px-2"><span>portfolios</span></a>
            <a href="" class="px-2"><span>experiences</span></a>
            <a href="" class="px-2"><span>contact</span></a>
          </div>
          
          <div class="d-flex align-center">
            <svg-icon type="mdi" :path="mdiWeatherNight" class="text-blue-lighten-1"></svg-icon>
          </div>
        </nav>
    </header>

    <main class="bg-grey-darken-4">
      <div>
        <div class="w-75 d-flex bg-grey-darken-4 h-screen mx-auto align-center">
          <div>
              <div class="d-flex flex-row">
                <span class="py-3 pr-2"><hr style="width: 15px;"></span>
                <p class="font-weight-thin" style="letter-spacing: 8px;">MY NAME IS</p>
              </div>
            <h3 class="text-h4 font-weight-bold">
              <span class="mr-1 text-white">{{ firtsPage.name.firstName }}</span>
              <span class="text-blue-lighten-1">{{ firtsPage.name.lastName }}.</span>
            </h3>
            <p class="w-50">{{ firtsPage.description }}</p>
            <div class="mt-3">
              <a :href="firtsPage.socialLink.ig" target="_blank"><svg-icon class="mr-4" type="mdi" :path="mdiInstagram"></svg-icon></a>
              <a :href="firtsPage.socialLink.github" target="_blank"><svg-icon class="mr-4" type="mdi" :path="mdiGithub"></svg-icon></a>
              <a :href="firtsPage.socialLink.x" target="_blank"><svg-icon class="mr-4" type="mdi" :path="mdiTwitter"></svg-icon></a>
              <a :href="firtsPage.socialLink.linkedin" target="_blank"><svg-icon class="mr-4" type="mdi" :path="mdiLinkedin"></svg-icon></a>
            </div>
          </div>
          <div>
            <img src="/src/assets/avatar.png" alt="Avatar" style="max-width: 400px;">
          </div>
        </div>
      </div>

      <div class="bg-grey-lighten-5 h-screen">

        <div class="h-25 d-flex flex-column justify-end align-center">
          <div class="d-flex flex-row justify-start">
            <span class="py-3 pr-2"><hr style="width: 15px;"></span>
            <p class="font-weight-thin" style="letter-spacing: 8px;">SERVICES</p>
          </div>
          <h3 class="text-h4 font-weight-medium mb-4">
            <span class="mr-1 text-grey-darken-1">Specialized in</span>
          </h3>
        </div>

        <div class="h-75 d-flex flex-row justify-center align-center">

          <v-col v-for="item in secondPage" cols="12" md="3" class="text-center text-grey-darken-1">
            <v-card elevation="5">
              <v-card-item class="mt-7 mb-2">
                <div class="d-flex justify-center align-center mb-2">
                  <div class="bg-blue-lighten-5 d-flex justify-center align-center rounded-lg" style="width: 40px; height: 40px;">
                    <svg-icon type="mdi" :path="mdiCrownOutline" class="text-grey-darken-1"></svg-icon>
                  </div>
                </div>
                <v-card-title class="text-grey-darken-1">{{ item.title }}</v-card-title>
              </v-card-item>

              <v-card-text class="text-grey-darken-1 font-weight-light mb-7">
                {{ item.description }}
              </v-card-text>
            </v-card>
          </v-col>

        </div>

      </div>
    </main>

    <footer class="bg-grey-lighten-5 d-flex flex-column justify-center align-center py-5 mt-n15">
      <p class="text-grey-darken-1" style="letter-spacing: 2px;">{{ footer }}</p>
    </footer>

  </div>
</template>

<style scoped>

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    color: #BDBDBD;
  }

</style>
