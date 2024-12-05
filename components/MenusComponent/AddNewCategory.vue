<template>
  <div class="card flex justify-content-center">
    <!-- Button Section -->
    <button
      @click="visible = true"
      class="flex items-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
    >
      <Icon name="heroicons-outline:plus" class="w-5 h-5 mr-2" />
      New Category
    </button>

    <Dialog
      v-model:visible="visible"
      modal
      header="Create New Category"
      :style="{ width: '30rem' }"
    >
      <form @submit.prevent="handleSubmit">
        <!-- Category Name -->
        <div class="mb-4">
          <label for="menuName" class="block text-sm font-medium text-gray-700">
            Category Name
          </label>
          <input
            type="text"
            id="menuName"
            name="menuName"
            v-model="menuName"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Category Description -->
        <div class="mb-4">
          <label
            for="menuDescription"
            class="block text-sm font-medium text-gray-700"
          >
          Category Description
          </label>
          <textarea
            id="menuDescription"
            name="menuDescription"
            v-model="menuDescription"
            rows="3"
            class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>

        <!-- Drag-and-Drop Image Upload -->
        <div
          class="mb-4 border relative border-dashed border-gray-300 rounded-lg text-center h-64"
          @dragover.prevent
          @drop.prevent="handleFileDrop"
        >
          <p v-if="!imagePreview" class="text-gray-600 absolute top-16 left-6">
            Drag and drop an image here, or click to select
          </p>
          <input
            type="file"
            accept="image/*"
            @change="handleFileInput"
            class="hidden"
            ref="fileInput"
          />
          <button
            v-if="!imagePreview"
            type="button"
            class="mt-2 px-4 py-2 bg-transparent text-white rounded-md absolute w-full h-full left-0 top-0"
            @click="triggerFileInput"
          >
            <Icon
              name="heroicons-outline:upload"
              class="w-10 h-10 mr-2 text-gray-500"
            />
          </button>

          <img
            v-if="imagePreview"
            :src="imagePreview"
            class="rounded-md shadow-md object-cover w-full h-full cursor-pointer transition-all duration-500 ease-in-out hover:blur-sm"
          />
        </div>

        <!-- Days Selection -->
      </form>

      <div class="flex justify-between items-center mt-2 ">
        <div class="flex items-center  gap-3">
          <label class="relative inline-flex cursor-pointer items-center">
            <input id="switch" type="checkbox" class="peer sr-only" />
            <label for="switch" class="hidden"></label>
            <div
              class="peer h-9 w-[3.8rem] rounded-full border bg-gray-300 after:absolute after:left-[2px] after:top-1 after:h-7 after:w-7 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
            ></div>
          </label>
          <p class="font-semibold">Active</p>
        </div>

        <button type="submit" class="bg-gray-500 px-3 py-2 text-white rounded-md flex items-center justify-center">
            <Icon name="heroicons-solid:plus" class="w-5 h-5" />
            <span>Create</span>
        </button>
      </div>
    </Dialog>
  </div>
</template>

<script setup>
const visible = ref(false);
const menuName = ref("");
const menuDescription = ref("");
const menuActive = ref(true);
const imagePreview = ref(null);
const fileInput = ref(null);
const selectedImage = ref(null);

const days = ref([
  { name: "Mon", active: false, startTime: "00:00", endTime: "00:00" },
  { name: "Tue", active: false, startTime: "00:00", endTime: "00:00" },
  { name: "Wed", active: false, startTime: "00:00", endTime: "00:00" },
  { name: "Thu", active: false, startTime: "00:00", endTime: "00:00" },
  { name: "Fri", active: false, startTime: "00:00", endTime: "00:00" },
  { name: "Sat", active: false, startTime: "00:00", endTime: "00:00" },
  { name: "Sun", active: false, startTime: "00:00", endTime: "00:00" },
]);

const timeOptions = [
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
  "06:00",
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

const toggleDay = (index) => {
  days.value[index].active = !days.value[index].active;
};

const triggerFileInput = () => fileInput.value.click();

const handleFileInput = (event) => {
  const file = event.target.files[0];
  if (file) {
    selectedImage.value = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const handleFileDrop = (event) => {
  const file = event.dataTransfer.files[0];
  if (file) {
    selectedImage.value = file;
    imagePreview.value = URL.createObjectURL(file);
  }
};

const handleSubmit = () => {
  console.log({
    menuName: menuName.value,
    menuDescription: menuDescription.value,
    menuActive: menuActive.value,
    days: days.value,
    image: selectedImage.value,
  });
  visible.value = false;
};
</script>

<style scoped>
/* Add TailwindCSS classes and minimal scoped styles if needed */
</style>
