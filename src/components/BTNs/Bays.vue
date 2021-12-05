<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center >
      <v-container grid-list-lg>
        <h1 style = "color:#2b0056" class="mb-3 mt-3">Ваши покупки</h1>
        <v-layout row wrap>
          <v-flex
                  v-for="news in news"
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

                <v-card-title>Apple Watch</v-card-title>

                <v-card-text>
                  <v-row
                          align="center"
                          class="mx-0"
                  >
                    <div style="color: #2b0056; font-size: 20px">
                    36 990 ₽</div>

                  </v-row>

                  <div class="my-4 text-subtitle-1">

                  </div>

                  <div>Алюминиевый корпус очень лёгкий. Он изготовлен из сплава, который содержит только переработанный алюминий. Такой материал используется в аэрокосмической отрасли.</div>
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
    data () {
      return {
        news:[
          {
            title:"Хуа Чэн",
            desc:"Это китаец я не знаю что еще вставлять его зовут Хуа Чэн",
            promo: true,
            src: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKU83_VW_34FR+watch-41-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=700&hei=700&trim=1,0&fmt=p-jpg&qlt=95&.v=1632171038000,1631661171000",
            id:"1"
          },
          {
            title:"Се Лянь",
            desc:"Это китаец я не знаю что еще вставлять его зовут Се Лянь или Его Высочество Наследный Принц",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"2"
          },
          {
            title:"Вэй У Сянь",
            desc:"Это китаец я не знаю что еще вставлять его зовут Вэй У Сянь",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"3"
          },
          {
            title:"Лань Чжань",
            desc:"Это китаец я не знаю что еще вставлять его зовут Лань Чжань но вообще-то он Хан Гуан Цзюнь",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"4"
          },
          {
            title:"Цзинь Лин",
            desc:"Это китаец он противный но милый",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"5"
          },
          {
            title:"Ши Цинсюань",
            desc:"Это китаец я не знаю что еще вставлять ПОЧЕМУ ОНО НЕ РАБОТАЕТ",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"6"
          },
          {
            title:"Лань Чжань",
            desc:"Это китаец я не знаю что еще вставлять",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"7"
          },
          {
            title:"Цзинь Лин",
            desc:"Это китаец",
            promo: true,
            src: "https://ae04.alicdn.com/kf/H745bd843859542ebb8cdcb4ee85c693aH/iWatch-6-5-4-SE-40-44.jpg",
            id:"8"
          },

        ]
      }
    }
  }
</script>