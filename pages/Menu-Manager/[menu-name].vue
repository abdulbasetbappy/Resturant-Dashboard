<template>
  <div class="p-4">
    <!-- Header -->
    <div class="flex flex-row justify-between items-start">
      <div class="flex flex-row gap-3">
        <h1 class="text-2xl font-medium">Edit Menu Informations</h1>
      </div>
      <div class="flex flex-row gap-3">
        <!-- Submit Button -->
        <MainButton
          label="Edit Menu"
          icon="solar:add-square-bold-duotone"
          :handleSubmit="handleSubmit"
        />
        <MainButton
          label="ReOrder Categories"
          icon="solar:add-square-bold-duotone"
          :handleSubmit="handleSubmit"
        />
      </div>
    </div>
    {{ router.currentRoute.value }}
  </div>
</template>

<script setup>
//current menu path
const router = useRouter();
</script>

<style scoped></style>
