<template>
  <div class="logo">
    <img src="../assets/healthcare.svg" />
    <p>Сервис онлайн-записи к врачу</p>
  </div>
  <el-menu mode="horizontal" class="main-menu">
    <el-menu-item index="1">
      <router-link to="/portal">Главная</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/login">Вход</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/registration">Регистрация</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.logo {
  display: flex;
  margin: 0 auto;
  justify-content: center;
}
.logo img {
  height: 50px;
  margin: 0 10px 0 0;
}
</style>