import Vue from "vue";
import {
    Vuetify,
    VApp,
    VCard,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VDataTable,
    VDatePicker,
    VTextField,
    VDialog,
    VRadioGroup,
    VMenu,
    VSelect,
    VDivider,
    VToolbar,
    VSnackbar,
    VProgressCircular,
    VTooltip,
    VCheckbox
} from "vuetify";

Vue.use(Vuetify, {
    components: {
        VApp,
        VCard,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VDataTable,
        VDatePicker,
        VTextField,
        VDialog,
        VRadioGroup,
        VMenu,
        VSelect,
        VDivider,
        VToolbar,
        VSnackbar,
        VProgressCircular,
        VTooltip,
        VCheckbox
    },
    theme: {
        primary: "#4CAF50",
        secondary: "#FF8A65",
        accent: "#82B1FF",
        error: "#B71C1C",
        info: "#90CAF9",
        success: "#4CAF50",
        warning: "#8E24AA"
    }
});
