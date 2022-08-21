<template>
  <p>
    {{ $store.state.user }},
    {{ $store.state.theme }},
    {{ $store.state.userList }},

      <ul>
    <li v-for="permissions in $store.state.permissions" :key="permissions">
    {{permissions}}</li>
  </ul>
  
 
   <ul>
    <li v-for="itemList in $store.state.itemList" :key="itemList">
    {{itemList.title}}</li>
  </ul>


{{$store.state.fullName}}
<button @click="updateName" >fullname bilgisini değiştir</button>



    
  </p>

</template>

<script>



export default {
  name: "App",
  created() {
    console.log(this.$store.state.person);
    console.log(this.$store.state.theme);
    console.log(this.$store.state.itemList.filter(i=>i.type=="mobilya"))
    console.log(this.$store.getters.wooditems)
    console.log(this.$store.getters.activeUser)
    
  },
 

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
