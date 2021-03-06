import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: '#9c27b0',
                secondary: '#2196f3',
                accent: '#00bcd4',
                error: '#e91e63',
                warning: '#ffc107',
                info: '#009688',
                success: '#4caf50'
            },
        },
    },
});