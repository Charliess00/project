<template>
<v-app>
<v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
<v-app-bar app dark color="primary">
<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
<v-spacer></v-spacer>
<v-toolbar-items class="hidden-sm-and-down">
       <v-btn  text><v-icon left>mdi-magnify</v-icon>Поиск</v-btn> 
       <v-btn  text><v-icon left>mdi-chat</v-icon>Чаты</v-btn>
       <v-btn  text><v-icon left>mdi-bell</v-icon>Уведомления</v-btn>
       <v-btn  text><v-icon left>mdi-map-marker</v-icon>Контакты</v-btn>
       <v-btn  text><v-icon left>mdi-bullhorn</v-icon>Тех.поддержка</v-btn>
       <v-btn  text><v-icon left>mdi-account</v-icon>Аккаунт</v-btn>
</v-toolbar-items>
</v-app-bar>
<v-content>
<router-view></router-view>
</v-content>
</v-app>
</template>
<script>
export default {
data() {
return {
drawer: false
}
}
}
</script>