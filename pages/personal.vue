<!-- A page to show a personal website. For desktop have image on the left, and content on the right. Mobile, image on top -->
<template>
    <div class="background_color1 main-container">
        <b-container class="full-height">
            <b-row class="full-height">

                <b-col cols="12" md="5" lg="4" xl="3" class="photo-container">

                    <!-- profile image -->
                    <div class="img-background background_color5">
                        <b-img :src="img" :alt="imgAlt" fluid rounded="circle" />
                    </div>
                </b-col>

                <b-col cols="12" md="7" lg="8" xl="9" class="text-container">
                    <div>

                        <!-- page greeting and name introduction -->
                        <div class="text-center welcome">
                            <h1 class="display-4 text_color4">{{ pageWelcome }} <span class="text_color2">{{ name }}</span>
                            </h1>
                        </div>

                        <!-- welcome text/quote -->
                        <p class="primary_text_color1">{{ welcomeText }}</p>
                    </div>

                    <div>

                        <!-- about me heading -->
                        <h2 class="text_color2">{{ about }}</h2>

                        <!-- about me text paragraphs -->
                        <p class="primary_text_color1">{{ aboutText }}</p>
                        <p class="primary_text_color1">{{ aboutText2 }}</p>
                        <p class="primary_text_color1">{{ aboutText3 }}</p>
                    </div>

                    <div>

                        <!-- contact heading -->
                        <h2 class="text_color2">{{ contact }}</h2>

                        <!-- Show contact icons -->
                        <div class="icon-container">
                            <font-awesome-icon :icon="['fab', 'twitter']" class="text_color4 icon" />
                            <font-awesome-icon :icon="['fab', 'linkedin']" class="text_color4 icon" />
                            <font-awesome-icon :icon="['fab', 'github']" class="text_color4 icon" />
                            <font-awesome-icon :icon="['fab', 'instagram']" class="text_color4 icon" />
                            <font-awesome-icon :icon="['fab', 'dribbble']" class="text_color4 icon" />
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import { colorMixin } from "../mixins/colors.js";

export default {
    mixins: [colorMixin],
    data() {
        return {
            pageWelcome: "Aloha! ",
            name: "I'm Ryan",
            welcomeText: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            about: "About Me",
            aboutText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            aboutText2: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
            aboutText3: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
            contact: "Contact Me",
            img: require('@/assets/hiMe.jpg'),
            imgAlt: "a selfie photo of Ryan throwing up the shaka and standing in front of the sunset on the beach"
        }
    },

    head() {
        return {
            title: "Personal Page",

            // seo - lesson 10 assignment
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'the personal page of the site, that allows users generate and customize the color palette for the site to enhance their experience.'
                },
            ],
        };
    },

    mounted() {

        // call refresh method to get the appropriate colors on the page
        this.refresh();
    }
}
</script>

<style scoped lang="scss">
@import '../scss/settings.variables';

p {
    color: $textlight
}

.main-container {
    padding-bottom: 2rem;
}

.full-height {
    min-height: calc(100vh - 11rem);
}

.img-background {
    padding: 5px;
    border-radius: 100%;
}

.text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
}

.welcome {
    margin-top: 3rem;
}

.photo-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.icon-container {
    font-size: 2rem;
}

.icon {
    margin: 0 1rem;
}

$breakpoint-tablet: 768px;

@media (max-width: $breakpoint-tablet) {
    .photo-container {
        height: 30vh;
    }

    .img-background {
        width: 30vh;
    }
}
</style>
