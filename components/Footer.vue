<!-- footer component for the site -->
<template>
    <footer class="background_color1">
        <p class="text_color2">{{ footerText }} <font-awesome-icon :icon="['fas', 'heart']" class="text_color4" /> {{
            footerText2 }}
            <a href="https://github.com/Poipounder81" class="text_color3">{{ name }}</a> {{ footerText3 }} <a
                href="https://huemint.com" class="text_color3">{{ footerText4 }}</a>
        </p>
    </footer>
</template>

<script>
export default {
    data: () => {
        return {
            footerText: 'Live, Laugh, Love, Spam That',
            footerText2: 'by',
            name: 'Ryan Mamuad',
            footerText3: 'using',
            footerText4: 'Huemint',
        }
    }
}
</script>

<style lang="scss">
footer {
    display: flex;
    justify-content: center;
}

footer p {
    margin-top: 1rem;
    margin-bottom: 6rem;
}
</style>
