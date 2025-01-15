<script setup>

import TitleBar from './components/TitleBar.vue'
import ExpenseList from './components/ExpenseList.vue'
import expenses from './data/expenses.json'
import { ref } from 'vue'
import CalcButton from './components/CalcButton.vue'

const expenseListFromJson = ref(expenses)
const expName = ref("")

function btnClick() {
  expenseListFromJson.value.push({ "expenseName": "Cheval", "price": 5000 })
}

</script>

<template>
  <div>
    <TitleBar/>
    <div style="display: flex; flex-direction: column; text-align: left;">
      Dépenses
      <ExpenseList :expenseList = expenseListFromJson></ExpenseList>
      <input type="text" name="expName" value="">
      <CalcButton :value="1" :actionFunction="() => {console.log('btn clicked');}"/>
      <CalcButton :value="9" :actionFunction="() => {console.log('btn clicked');}"/>
    </div>
    <div></div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
