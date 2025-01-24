<template>
    <div>
      <!-- Add New Menu Button -->
      <MainButton
        v-if="buttonType === 'text'"
        :label="buttonLabel"
        icon="none"
        @click="isPopupOpen = true"
        :overWriteClass="customBtnClass"
      />
      <MainButton
        v-if="buttonType === 'icon'"
        label="none"
        :icon="buttonIcon"
        :iconPosition="buttonIconPosition"
        overWriteClass="rounded-lg bg-opacity-0"
        iconClass="w-8 h-8"
        @click="isPopupOpen = true"
      />
      <MainButton
        v-if="buttonType === 'both'"
        :label="buttonLabel"
        :icon="buttonIcon"
        :iconPosition="buttonIconPosition"
        overWriteClass="px-4 py-2 text-base rounded-lg gap-2"
        @click="isPopupOpen = true"
      />
      <!-- Popup Modal -->
      <div
        v-if="isPopupOpen"
        class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
      >
        <div
          class="bg-slate-800 opacity-100 w-[28rem] p-6 rounded-lg shadow-lg animate-fadeIn relative"
        >
          <!-- Close Button -->
          <MainButton
            label="none"
            icon="solar:circle-top-down-line-duotone"
            @click="isPopupOpen = false"
            overWriteClass="rounded-full px-2 py-2 absolute top-2 right-2"
          />
  
          <!-- Popup Content -->
  
          <h2 class="text-xl font-bold mb-4 text-slate-100">{{ label }}</h2>
  
          <form @submit.prevent="handleSubmit(apiUrl)">
            <label class="block mb-2 text-gray-200 text-lg">
              {{ nameLabel }}
              <input
                type="text"
                v-model="name"
                class="block w-full p-2 border border-slate-300 rounded-md outline-none"
                :placeholder="namePlaceholder"
                required
              />
            </label>
            <label class="block mb-2 text-gray-200 text-lg">
              {{ descriptionLabel }}
              <textarea
                type="text"
                v-model="description"
                class="block w-full p-2 border border-slate-300 rounded-md outline-none"
                :placeholder="descriptionPlaceholder"
                required
              />
            </label>
            <MainFileDropZone
              type="menu"
              label="Upload Images"
              v-model:file="uploadedFile"
            />
            <div class="mt-4 flex gap-3 justify-between">
              <MainToggle v-model="status" />
              <MainButton
                label="Save"
                icon="solar:archive-up-minimlistic-line-duotone"
                overWriteClass=" w-full rounded-lg gap-2 text-xl"
                type="submit"
              />
              <MainButton
                label="none"
                icon="solar:trash-bin-trash-bold-duotone"
                @click="handleCancel"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const isPopupOpen = ref(false);
  const name = ref("");
  const description = ref("");
  const uploadedFile = ref(null);
  const status = ref(true);
  defineProps({
    label: {
      type: String,
      default: "Add New Menu",
    },
    buttonType: {
      type: String,
      default: "text",
    },
    buttonLabel: {
      type: String,
      default: "Add New",
    },
    buttonIcon: {
      type: String,
      default: "solar:trash-bin-trash-bold-duotone",
    },
    buttonIconPosition: {
      type: String,
      default: "right",
    },
    nameLabel: {
      type: String,
      default: "Menu Name",
    },
    namePlaceholder: {
      type: String,
      default: "Enter menu name",
    },
    descriptionLabel: {
      type: String,
      default: "Description",
    },
    descriptionPlaceholder: {
      type: String,
      default: "Enter menu Description",
    },
    apiUrl: {
      type: String,
      default: "/api/menu",
      required: true,
    },
    customBtnClass: {
      type: String,
      default: "",
    },
    categoryId: {
      type: Number,
      default: 1,
    },
    menuId: {
      type: Number,
      default: 1,
    },
  });
  
  const handleSubmit = (apiUrl) => {
    const formData = reactive({
      name: name.value,
      description: description.value,
      status: status.value,
      file: uploadedFile.value,
      apiUrl: apiUrl,
    });
    console.log(formData);
    isPopupOpen.value = false;
  };
  const handleCancel = () => {
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
  