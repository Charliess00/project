import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#2b0056',
                secondary: '#37b047',
                accent: '#ff0000',
                error: '#b71c1c',
            },
        },
    },
});

Vue.use(Vuetify);

export default new Vuetify({
});