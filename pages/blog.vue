<!-- This is to give a blog site example. Have an artile on the left (or top on mobile) and previews on the right -->
<template>
    <div class="full-height background_color1">
        <b-container>

            <!-- food blog page title -->
            <div class="text-center title">
                <h1 class="display-4 text_color2">{{ pageTitle }}</h1>
            </div>

            <b-row>

                <!-- The main article section -->
                <b-col cols="12" lg="7" class="mainPost textLeft">
                    <b-img :src="mainPost.imgSrc" :alt="mainPost.imgAlt" fluid></b-img>
                    <h2 class="text_color3">{{ mainPost.title }}</h2>
                    <p class="primary_text_color1">{{ mainPost.text }}</p>
                    <div class="textRight">
                        <a href="#" class="text_color4" @click="readMoreAlert()">{{ readMore }}</a>
                    </div>
                </b-col>

                <!-- aside article previews -->
                <b-col cols="12" lg="5">
                    <BlogPostPreview v-for="(post, index) in blogPosts" :key="index" :post="post" :id="post.id"
                        :title="post.title" :text="post.text" :imgSrc="post.imgSrc" :imgAlt="post.imgAlt" />
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import BlogPostPreview from "../components/BlogPosts";
import { colorMixin } from "../mixins/colors.js";
import { blogMixin } from "../mixins/blog.js";

export default {
    mixins: [colorMixin, blogMixin],
    components: { BlogPostPreview },
    data() {
        return {
            pageTitle: 'The Food Blog',
            readMore: 'Read More >>',
            mainPost: {
                title: 'What is a Musubi?',
                imgSrc: require('@/assets/Spam-Musubi-Banner.jpg'),
                imgAlt: 'four spam musubi lined up, side by side',
                padding: '',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatum consequuntur enim, ipsa aspernatur quam nulla laudantium nemo magni. Iusto cum facere officia ducimus accusamus beatae ipsum aliquid! Voluptatem, laborum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, totam? Possimus eaque inventore, earum harum magnam dolore saepe asperiores sint assumenda eligendi, autem tenetur quidem iusto quas cumque? Non, rem. Lorem ipsum dolor sit amet consectetur adipisicing elit.'
            },
            blogPosts: [
                {
                    id: 1,
                    title: '- Spam Musubi -',
                    imgSrc: require('@/assets/top-1.jpg'),
                    imgAlt: 'spam and rice, wrapped in nori',
                    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas maiores deserunt dolore consequatur libero, laboriosam numquam. Ut maxime dolores dolorem...'
                },
                {
                    id: 2,

                    title: '- Chicken Teriyaki Musubi -',
                    imgSrc: require('@/assets/top-2.jpg'),
                    imgAlt: 'grilled chiken with teriyaki sauce and rice wrapped in nori',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nihil aliquid, animi blanditiis eligendi error neque tempora ad reprehenderit ducimus...'
                },
                {
                    id: 3,

                    title: '- Chicken Musubi -',
                    imgSrc: require('@/assets/top-3.jpg'),
                    imgAlt: 'chicken katsu and rice, wrapped in nori',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea provident cumque nihil magni impedit perspiciatis eaque numquam cum atque tenetur...'
                }
            ],
        }
    },

    head() {
        return {
            title: "The Food Blog",

            // seo - lesson 10 assignment
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'A food blog page of a musubi shop business site, that allows users generate and customize the color palette for the site to enhance their experience.'
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

<style lang="scss">
h2 {
    margin-top: 1rem;
}

h4 {
    font-size: medium;
}

.full-height {
    min-height: calc(100vh - 11rem);
    padding-bottom: 2rem;
}

.title {
    padding: 3rem 0;
}

.mainPost {
    margin-bottom: 2rem;
}

.textLeft {
    text-align: left;
}

.textRight {
    text-align: right;
}
</style>
