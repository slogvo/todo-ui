<template>
  <div>
    <h1>Error Page</h1>
    <div v-if="error.statusCode === 404">
      <h2>Page Not Found</h2>
      <p>The requested page could not be found.</p>
    </div>
    <div v-else>
      <h2>Other Error</h2>
      <p>An error occurred.</p>
    </div>
    <NuxtLink to="/">Go to Home Page</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

h2 {
  font-size: 20px;
  margin-bottom: 5px;
}

p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
