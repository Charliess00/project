<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
          КИПУ
          </v-list-item-title>
          <v-list-item-subtitle>
          Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item-group color="primary">
        <v-list-item v-for="link in menu" :key="link.title">
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>
  <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="link in links" :key="link.title" text><v-icon left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
  <v-main>
  <!--<router-view></router-view>-->
  </v-main>
  </v-app>
</template>
<script>
  export default {
  data() {
    return {
      drawer: false,
      links: [
		{title:"Поиск", icon:"mdi-magnify", url:"/login"},
		{title:"Чат", icon:"mdi-chat", url:"/registration"},
		{title:"Уведомления", icon:"mdi-bell", url:"/orders"},
		{title:"Контакты", icon:"mdi-map-marker", url:"/new"},
		{title:"Тех.поддержка", icon:"mdi-bullhorn", url:"/list"},
		{title:"Аккаунт", icon:"mdi-account", url:"/list"}
	],

	menu: [
		{title:"Новости", icon:"mdi-newspaper-variant", url:"/login"},
		{title:"Форум", icon:"mdi-account-group", url:"/registration"},
		{title:"Сообщения", icon:"mdi-forum", url:"/new"},
		{title:"Личный кабинет", icon:"mdi-account-check", url:"/orders"}
      ]
      }
    }
  }
</script>
