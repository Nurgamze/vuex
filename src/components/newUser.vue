<template>
  <button @click="updateName"></button>
</template>

<script>
export default {
  methods: {
    updateName() {
      this.$store.state.itemList.push({ id: 6, title: "Raf", type: "mobilya" });
      this.$store.state.fullName = new Date().getTime();
    },
  },
};
</script>
