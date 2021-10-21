<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" style="background: #efdfff">
      <v-list-item style="background: #2b0056">
        <v-list-item-content>
          <v-list-item-title class="title" style="color: #f1e4ff">
          КИПУ
          </v-list-item-title>
          <v-list-item-subtitle style="color: #f1e4ff">
         Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="link in menu" :key="link.title" :to="link.url" style="color: #2b0056">
          <v-list-item-icon>
            <v-icon style="color: #2b0056">{{ link.icon }}</v-icon >
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
  <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer" style="color: #f1e4ff"></v-app-bar-nav-icon>
    <v-btn text to="/">На главную</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn style="color: #f1e4ff" v-for="link in links" :key="link.title" :to="link.url" text><v-icon left style="color: #b87bff">{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  <v-main style="background: #f1e4ff">
  <router-view></router-view>
  </v-main>
  </v-app>
</template>
<script>
  export default {
  data() {
    return {
      drawer: false,
      links: [
		{title:"Контакты", icon:"mdi-map-marker", url:"/Contacts"},
		{title:"Создать статью", icon:"mdi-bullhorn", url:"/Help"},
		{title:"Аккаунт", icon:"mdi-account", url:"/Acc"}
	],

	menu: [
		{title:"Статьи", icon:"mdi-newspaper-variant", url:"/News"},
		{title:"Форумы", icon:"mdi-account-group", url:"/Forum"},
		{title:"Отзовы", icon:"mdi-forum", url:"/Massage"},
		{title:"Личный кабинет", icon:"mdi-account-check", url:"/User"}
      ]
      }
    }
  }
</script>
