<script setup>
const props = defineProps(['value', 'actionFunction'])

</script>

<template>
  <div class="calcBtnBg" @click="() => {console.log('patate')}">
    <button class="calcBtn" @click="props.actionFunction">{{ props.value }}</button>
    <button class="calcBtn" @click="props.actionFunction">{{ props.value }}</button>
    <button class="calcBtn" @click="props.actionFunction">{{ props.value }}</button>
  </div>
</template>

<style scoped>
.calcBtn {
 background-color: green;
 border: 2px solid black;
 margin: 1%;
}
</style>
