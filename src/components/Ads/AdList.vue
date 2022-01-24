<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center >
      <v-container grid-list-lg>
        <h1 style = "color:#2b0056" class="mb-3 mt-3">Опубликованны вами</h1>
        <v-layout row wrap>
          <v-flex
                  v-for="news in myAds"
                  :key="news.id"
          >
              <v-card
                      :loading="loading"
                      class="mx-auto my-2"
                      max-width="374"
              >
                <template slot="progress">
                  <v-progress-linear
                          color="deep-purple"
                          height="10"
                          indeterminate
                  ></v-progress-linear>
                </template>

                <v-img
                        height="250"
                        :src="news.src"
                ></v-img>

                <v-card-title>
                  {{news.title}}
                </v-card-title>

                <v-card-text>
                  <v-row
                          align="center"
                          class="mx-0"
                  >


                  </v-row>

                  <div class="my-4 text-subtitle-1">

                  </div>

                  <div>
                    {{news.desc}}
                  </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn raised color="primary">
                    Написать отзыв
                  </v-btn>
                </v-card-actions>
              </v-card>

          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    computed: {
      myAds(){
        return this.$store.getters.myAds
      }
    }
  }
</script>