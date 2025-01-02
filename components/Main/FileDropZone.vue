<template>
  <div v-if="type === 'file'">
    <h1 class="text-xl">{{ label }}</h1>
    <div
      ref="dropzone"
      class="w-[250px] h-[250px] relative border-2 border-slate-800 border-dashed rounded-lg my-4 p-2"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <input
        type="file"
        id="file-upload"
        class="absolute inset-0 w-full h-full opacity-0 z-50"
        :accept="accept"
        @change="handleFileChange"
      />
      <div class="text-center pt-12" v-if="!preview">
        <Icon
          name="solar:cloud-upload-line-duotone"
          class="mx-auto h-12 w-12"
        />
        <h3 class="mt-2 text-sm font-medium text-gray-700">
          <label for="file-upload" class="relative cursor-pointer">
            <span>Drag and drop</span>
            <span class="text-indigo-600 underline"> or browse</span>
            <span> to upload</span>
          </label>
        </h3>
        <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>

      <img
        v-else
        :src="preview"
        class="mx-auto w-full h-full object-cover  rounded-lg"
        alt="File Preview"
      />
    </div>
  </div>
  <div v-if="type === 'profile'">
    <h1 class="text-xl ">{{ label }}</h1>
    <div
      ref="dropzone"
      class="w-[250px] h-[250px]  relative border-2 border-slate-800 border-dashed rounded-full p-4 mx-auto my-4 flex items-center justify-center"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <input
        type="file"
        id="file-upload"
        class="absolute inset-0 w-full cursor-pointer h-full opacity-0 z-50"
        :accept="accept"
        @change="handleFileChange"
      />
      <div class="text-center py-8" v-if="!preview">
        <Icon
          name="solar:cloud-upload-line-duotone"
          class="mx-auto h-12 w-12"
        />
        <h3 class="mt-2 text-sm font-medium text-gray-700">
          <label for="file-upload" class="relative cursor-pointer">
            <span>Drag and drop</span>
            <span class="text-indigo-600 underline"> or browse</span>
            <span> to upload</span>
          </label>
        </h3>
        <p class="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>

      <img
        v-else
        :src="preview"
        class="mx-auto w-full h-full object-cover  rounded-full"
        alt="File Preview"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  accept: {
    type: String,
    default: "image/*",
  },
  label: {
    type: String,
    default: "Upload Image",
  },
  type: {
    type: String,
    default: "file",
  },
});

const emit = defineEmits(["update:file"]);

// Reactive state
const preview = ref(null);
const dropzone = ref(null);

// Event handlers
const handleDragOver = () => {
  dropzone.value.classList.add("border-indigo-600");
};

const handleDragLeave = () => {
  dropzone.value.classList.remove("border-indigo-600");
};

const handleDrop = (event) => {
  dropzone.value.classList.remove("border-indigo-600");
  const file = event.dataTransfer.files[0];
  if (file) updateFile(file);
};

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) updateFile(file);
};

const updateFile = (file) => {
  displayPreview(file);
  emit("update:file", file); // Emit the file to the parent
};

// File preview
const displayPreview = (file) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    preview.value = reader.result;
  };
};
</script>
