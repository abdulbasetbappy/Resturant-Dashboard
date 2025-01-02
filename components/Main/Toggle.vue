<template>
  <label class="flex items-center cursor-pointer">
    <!-- Label -->
    <span v-if="labelPosition === 'left'" class="mr-2 font-semibold text-xl">{{ label }}</span>
    <!-- Input -->
    <input
      type="checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
      class="hidden"
    />
    <!-- Toggle UI -->
    <span
      class="w-12 h-8 flex items-center bg-gray-700 rounded-full p-1 transition duration-300 ease-in-out"
      :class="{ 'bg-blue-500': modelValue }"
    >
      <span
        class="bg-white w-6 h-6 rounded-full shadow-md transform transition duration-300 ease-in-out"
        :class="{ 'translate-x-4': modelValue }"
      ></span>
    </span>
    <!-- Label -->
    <span v-if="labelPosition === 'right'" class="ml-2 font-semibold text-xl">{{ label }}</span>
  </label>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    default: "",
  },
  labelPosition: {
    type: String,
    default: "right",
  },
});
</script>
