<script setup>
const props = defineProps(['expenseList'])
</script>

<template>
  <div style="width: 100%;" v-for="expense in props.expenseList">
    <div style="display: flex; justify-content: space-between;">
      <div>{{expense.expenseName}}</div> <div>{{expense.price}}$</div>
      <div>{{expense.expenseName}}</div> <div>{{expense.price}}$</div>
      <div>{{expense.expenseName}}</div> <div>{{expense.price}}$</div>
    </div>
  </div>
</template>

<style scoped>

</style>
