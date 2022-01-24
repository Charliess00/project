<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 style = "color:#2b0056" class="mb-3 mt-3">Создание статьи</h1>
                <v-form v-model="valid" ref="form"                     validation>
                    <v-text-field
                            name="title"
                            label="Название"
                            type="text"
                            v-model="title"
                            :rules="[ v => !!v || 'Необходимо ввести название']"
                    >
                    </v-text-field>
                    <v-textarea
                            name="description"
                            label="Описание"
                            type="text"
                            v-model="description"
                            :rules="[ v => !!v || 'Необходимо ввести описнаие']"
                            class="mb-3"
                    ></v-textarea>
                </v-form>
                <v-layout  row>
                    <v-flex xs12>
                        <v-btn
                                class="mt-3"
                                color="success">
                            Загрузить
                            <v-icon right dark>mdi-cloud-upload
                                Загрузить</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <img     src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" height="150" class="mt-3">
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-switch
                                v-model="promo"
                                label="Сделать актуальным?"
                        ></v-switch>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn
                                color="primary"
                                @click="createAd"
                        >Создать статью</v-btn>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    export default {
        data () {
            return {
                valid: false,
                title: "",
                description: "",
                promo: false
            }
        },
        methods: {
            createAd(){
                if (this.$refs.form.validate()){
                    const news = {
                        title: this.title,
                        desc: this.description,
                        promo: this.promo,
                        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    }
                    this.$store.dispatch("createAd", news)
                }
            }
        }
    }
</script>