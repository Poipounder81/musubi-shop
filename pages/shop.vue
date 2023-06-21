<!-- This is an example of a shopify type site. Have a photobar on top, with shopping cards below -->
<template>
    <div class="background_color1">

        <!-- Menu Page Title -->
        <div class="text-center title">
            <h1 class="display-4 text_color2">{{ title }}</h1>
        </div>

        <!-- Create a carousel for the images -->
        <b-carousel id="carousel-fade" fade controls>

            <!-- Pulling images from the carouselImages and adding them to the carousel -->
            <b-carousel-slide v-for="image in carouselImages" :key="image.id" :img-src="image.src" :img-alt="image.alt">
            </b-carousel-slide>
        </b-carousel>

        <!-- Menu Item Cards -->
        <b-container>

            <b-row>
                <!-- For each item in items, set up the menu item card from the Menu Item Cards file -->
                <ShoppingCard v-for="(itemList, index) in items" :key="index" :itemList="itemList"
                    :img_src="itemList.img_src" :img_alt="itemList.img_alt" :title="itemList.title" :desc="itemList.desc"
                    :btn_id="itemList.btn_id" :btn_text="itemList.btn_text" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
import ShoppingCard from "../components/ShoppingCards";
import { colorMixin } from "../mixins/colors.js";

export default {
    mixins: [colorMixin],
    components: { ShoppingCard },
    data: () => {
        return {
            title: 'Stop By and Grab a Bite',
            carouselImages: [
                {
                    title: 'Aloha',
                    src: require("@/assets/alohaBanner.jpg"),
                    alt: "colorful aloha banner "
                },
                {
                    title: 'Top 3 Musubi',
                    src: require("@/assets/top3musubi.jpg"),
                    alt: "teriyaki chicken musubi, chicken katsu musubi, spam musubi on a banana leaf"
                },
                {
                    title: 'Spam Musubi',
                    src: require("@/assets/Spam-Musubi.jpg"),
                    alt: "spam and rice, wrapped in nori"
                },
                {
                    title: 'Chicken Teriyaki Musubi',
                    src: require("@/assets/Chicken-Teriyaki-Musubi.jpg"),
                    alt: "grilled chiken with teriyaki sauce and rice wrapped in nori"
                },
                {
                    title: 'Chicken Katsu Musubi',
                    src: require("@/assets/Chicken-Katsu-Musubi.jpg"),
                    alt: "chicken katsu and rice, wrapped in nori"
                },
            ],

            // Each item has a photo, title, description, and two buttons
            items: [
                {
                    img_src: require('@/assets/top-1.jpg'),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-1",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-2.jpg'),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-2",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-3.jpg'),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-3",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-1.jpg'),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-1",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-2.jpg'),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-2",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-3.jpg'),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-3",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-1.jpg'),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-1",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-2.jpg'),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-2",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-3.jpg'),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-3",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-1.jpg'),
                    img_alt: "A Spam Musubi",
                    title: "Spam Musubi",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-1",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-2.jpg'),
                    img_alt: "A Teriyaki Chicken Musubi",
                    title: "Teriyaki Chicken",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-2",
                    btn_text_more: "Select"
                },
                {
                    img_src: require('@/assets/top-3.jpg'),
                    img_alt: "A Chicken Katsu Musubi",
                    title: "Chicken Katsu",
                    desc: "Ingredient List",
                    btn_text_buy: "Buy",
                    btn_id: "shop-btn-3",
                    btn_text_more: "Select"
                },
            ]
        };
    },

    head() {
        return {
            title: "Online Menu Page",

            // seo - lesson 10 assignment
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'the shop page of a musubi shop business site, that allows users to generate and customize the color palette for the site to enhance their experience.'
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
.title {
    padding: 3rem 0;
}

.carousel {
    padding-bottom: 3rem;
}
</style>
