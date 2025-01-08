<template>
  <button
  :class="[
      'bg-slate-500 text-blue-50 flex items-center justify-center',
      overWriteClass
    ]"
    @click="handleSubmit"
  >
    <Icon :name="icon" :class="iconClass"  v-if="icon !=='none' && iconPosition==='left'" />
    <span v-if="label !=='none'">{{ label }}</span>
    <Icon :name="icon" :class="iconClass" v-if="icon !=='none'  && iconPosition==='right'" />
  </button>
</template>

<script setup >
defineProps({
  handleSubmit: {
    type: Function,
    required: false,
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
  overWriteClass: {
    type: String,
    default: "px-4 py-2 rounded-lg gap-2",
  },
  iconClass: {
    type: String,
    default: "w-6 h-6",
  },
});
</script>

<style scoped></style>
