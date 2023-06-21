<!-- The hompage for 206 Musubi Shop. Let the user know what the site is about, and how to use it. -->
<template>
  <div class="background_color1 tall">

    <!-- Create the jumbotron -->
    <b-jumbotron header-level="3" variant="text-center rounded-lg" class="background_color2">

      <!-- jumbotron header -->
      <template #header>
        <span class="text_color1">{{ headerText }}</span>
        <span class="text_color4">{{ colorText }}</span>
        <span class="text_color1">{{ headerText2 }}</span>
      </template>

      <!-- jumbotron welcome message -->
      <template #lead>
        <span class="text_color1">{{ leadText }}</span>
        <span class="text_color4">{{ colorText }}</span>
        <span class="text_color1">{{ leadText2 }}</span>
      </template>

      <hr class="my-4 color5">

      <!-- jumbotron intro message to try product -->
      <p class="primary_text_color2">{{ jumbotronText }}</p>

      <!-- jumbotron top 3 musubi advertisement -->
      <div class="container text-center">
        <b-img :src="top3musubi.src" :alt="top3musubi.alt" fluid></b-img>
        <span class="text_color1"> {{ advertisementText }} </span>
        <span class="text_color4">{{ colorText2 }}</span>
        <span class="text_color1"> {{ advertisementText2 }} </span>
      </div>

      <div class="btnContainer">

        <!-- jumbotron page buttons for about me, online menu and food blog  -->
        <nuxt-link to="/personal" id="button-1" role="button" tabindex="0"
          class="nav-link btn homeBtn text_color3 border_color3 btn-lg" @mouseover.native="btnHovered('button-1', '3')"
          @mouseleave.native="btnUnhovered('button-1')">{{ btnPersonal }}</nuxt-link>
        <nuxt-link to="/shop" id="button-2" role="button" tabindex="0"
          class="nav-link btn homeBtn text_color4 border_color4 btn-lg" @mouseover.native="btnHovered('button-2', '4')"
          @mouseleave.native="btnUnhovered('button-2')">{{ btnShop }}</nuxt-link>
        <nuxt-link to="/blog" id="button-3" role="button" tabindex="0"
          class="nav-link btn homeBtn text_color5 border_color5 btn-lg" @mouseover.native="btnHovered('button-3', '5')"
          @mouseleave.native="btnUnhovered('button-3')">{{ btnBlog }}</nuxt-link>
      </div>

      <hr class="my-4 color5">

      <br>

      <!-- jumbotron instructions for the user(s) on how to change the color pallete for the site.  -->
      <p class="primary_text_color2">{{ jumbotronText2 }}</p>

    </b-jumbotron>

    <!-- tooltip text for the about me, online menu and food blog buttons -->
    <b-tooltip target="button-1" placement="bottom">
      {{ tooltipText }} <span class="text-primary"> {{ colorText }}</span>
    </b-tooltip>
    <b-tooltip target="button-2" placement="bottom">
      {{ tooltipText }} <span class="text-primary"> {{ colorText }}</span>
    </b-tooltip>
    <b-tooltip target="button-3" placement="bottom">
      {{ tooltipText }} <span class="text-primary"> {{ colorText }}</span>
    </b-tooltip>
  </div>
</template>

<script>
import { colorMixin } from "../mixins/colors.js";

export default {
  mixins: [colorMixin],
  data: () => {
    return {
      headerText: "The 206 ",
      headerText2: " Shop",
      colorText: "Musubi",
      leadText: "Welcome to the #1 ",
      leadText2: " Shop in the Greater Seattle Area!",
      jumbotronText: "If you love Hawaii and all things delicious, you’re in luck! A delicious and easy homemade Hawaiian Spam Musubi is just one of the great things you can try.",
      advertisementText: "Click on the ",
      advertisementText2: "to find our top 3 popular musubi and other delicious selections ",
      colorText2: "Online Menu",
      jumbotronText2: "Click on the color card to show the hex value, set your own color, copy the color to your clipboard, or to lock that color in for the next color palette. The arrow to the right will allow you to generate the color palette, and on mobile, the arrow to the left will show you the cards.",
      btnPersonal: "About Me",
      btnShop: "Online Menu",
      btnBlog: "Food Blog",
      tooltipText: "Let's find those",
      top3musubi: {
        src: require('@/assets/top3musubi.jpg'),
        alt: "three musubi menu items"
      }
    };
  },

  head() {
    return {
      title: "The 206 Musubi Shop",

      // seo - lesson 10 assignment
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A nuxt web app for a musubi shop business, that allows users to generate and customize the color palette for the site to enhance their experience.'
        },
      ],
    };
  },

  mounted() {

    // call refresh method to get the appropriate colors on the page
    this.refresh();
  }
};
</script>

<style lang="scss">
@import '../scss/settings.variables';

.homeBtn {
  width: 10rem;
}

.background_transparent {
  background-color: transparent;
}

.btn:hover {
  color: white !important;
  border-color: white !important;
}

.tall {
  min-height: calc(100vh - 11rem);
}

.jumbotron {
  margin-bottom: 0;
}
</style>