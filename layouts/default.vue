<template>
<v-app>
    <v-toolbar
        fixed app
        color="primary"
        dark
        :clipped-left="clipped">
        <v-toolbar-title>Compilers</v-toolbar-title>
    </v-toolbar>
    <v-content>
        <v-container>
        <nuxt />
        </v-container>
    </v-content>
    <v-footer
        :fixed="true"
        color="primary"
        dark
        app>
        <span>&copy; 2018 Instituto Tecnologico de Toluca</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
};
</script>
