<template>
  <ul>
    <li v-for="userList in $store.state.userList" :key="userList">
      {{ userList }}
    </li>
  </ul>
</template>
