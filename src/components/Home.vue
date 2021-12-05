<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
                v-for="ad in ads"
                :key="ad.id"
                :src="ad.src"
            >
              <div class="ad-link1">
                <v-btn class="primary" :to="'/ad/' + ad.id">
                  {{ ad.title }}
                </v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4
                v-for="ad in ads"
                :key="ad.id"
        >
          <v-card>
            <v-img
                :src="ad.src"
                height="200px"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0"><b>{{ad.title}}</b></h3>
                <div>{{ad.desc}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn raised color="primary" :to="'/ad/' + ad.id">
                подробнее
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ads:[
        {
          title:"Полезные продукты для вашего питомца",
          desc:"10 полезных продуктов для вашего бельченка",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id:"1"
        },
        {
          title:"Как фотографировать ночью",
          desc:"Фотографии звездного неба",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id:"2"
        },
        {
          title:"Факты об орлах",
          desc:"35 интересных фактов из жизни орлов",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id:"3"
        },
        {
          title:"Тайны космоса",
          desc:"Ужасные и необъяснимые явления",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id:"4"
        }

      ]
    }
  }
}
</script>
<style scoped>
.ad-link1 {
  position:absolute;
  bottom: 50px;
  left:50%;
  background: rgb(0,0,0,0.5);
  transform: translate(-50%,0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>