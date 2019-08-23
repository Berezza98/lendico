<template>
  <p>{{result}}</p>
</template>

<script>
export default {
  data() {
    return {
      result: null
    }
  },
  methods: {

  },
  async created() {
    try {
      const response = await this.$http.post("/monthly-installment", {
        amount: 10000,
        duration: 5,
      });
      console.log(response);
      this.result = response.data
    } catch(err) {
      console.log(err);
    }
  }
}
</script>

<style scoped>

</style>
