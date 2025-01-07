<template>
  <div>
    <!-- Add New Menu Button -->
    <MainButton
      label="Add New Menu"
      icon="solar:add-square-bold-duotone"
      :handleSubmit="handleSubmit"
      @click="isPopupOpen = true"
    />
    <!-- Popup Modal -->
    <div
      v-if="isPopupOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-slate-800 w-[28rem] p-6 rounded-lg shadow-lg animate-fadeIn relative"
      >
        <!-- Close Button -->
        <MainButton
          label="none"
          icon="solar:circle-top-down-line-duotone"
          @click="isPopupOpen = false"
          overWriteClass="rounded-full px-2 py-2 absolute top-2 right-2"
        />

        <!-- Popup Content -->

        <h2 class="text-xl font-bold mb-4 text-slate-100">Add New Menu</h2>

        <form @submit.prevent="handleSubmit">
          <label class="block mb-2 text-gray-200 text-lg">
            Menu Name
            <input
              type="text"
              v-model="menuName"
              class="block w-full p-2 border border-slate-300 rounded-md outline-none"
              placeholder="Enter menu name"
              required
            />
          </label>
          <label class="block mb-2 text-gray-200 text-lg">
            Description
            <textarea
              type="text"
              v-model="menudescription"
              class="block w-full p-2 border border-slate-300 rounded-md outline-none"
              placeholder="Enter menu Description"
              required
            />
          </label>
          <MainFileDropZone
            type="menu"
            label="Upload Images"
            v-model:file="uploadedFile"
          />
          <div class="mt-4 flex gap-3 justify-between">
            <MainToggle />
            <MainButton
              label="Save"
              icon="solar:archive-up-minimlistic-line-duotone"
              :handleSubmit="handleSubmit"
              overWriteClass=" w-full rounded-lg gap-2 text-xl"
            />
            <MainButton
              label="none"
              icon="solar:trash-bin-trash-bold-duotone"
              :handleSubmit="handleCancel"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const isPopupOpen = ref(false);
const menuName = ref("");

const handleSubmit = () => {
  console.log(`New menu added: ${menuName.value}`);
  menuName.value = "";
  isPopupOpen.value = false;
};
const handleCancel = () => {
  console.log(`New menu added: ${menuName.value}`);
  menuName.value = "";
  isPopupOpen.value = false;
};
</script>

<style>
/* Fade-in animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
</style>
