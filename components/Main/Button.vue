<template>
  <button
    class="bg-slate-500 px-4 py-2 rounded-lg text-blue-50 flex items-center justify-center gap-2"
    @click="handleSubmit"
  >
    <Icon :name="icon" class="w-6 h-6"  v-if="iconPosition==='left'" />
    <span>{{ label }}</span>
    <Icon :name="icon" class="w-6 h-6" v-if="iconPosition==='right'" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  handleSubmit: {
    type: Function,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  iconPosition: {
    type: String,
    default: "right",
  },
});
</script>

<style scoped></style>
