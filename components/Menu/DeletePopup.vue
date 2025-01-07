<template>
    <div>
      <!-- Add New Menu Button -->
      <MainButton
        v-if="buttonType === 'text'"
        :label="buttonLabel"
        icon="none"
        @click="isPopupOpen = true"
      />
      <MainButton
        v-if="buttonType === 'icon'"
        label="none"
        :icon="buttonIcon"
        :iconPosition="buttonIconPosition"
        @click="isPopupOpen = true"
      />
      <MainButton
        v-if="buttonType === 'both'"
        :label="buttonLabel"
        :icon="buttonIcon"
        :iconPosition="buttonIconPosition"
        overWriteClass="h-full w-28 rounded-lg gap-2"
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
  
          <h2 class="text-xl font-bold mb-4 text-slate-100">{{ label }}</h2>
            <div class="flex flex-col gap-4">
                <Icon
                    :name="icon"
                    class="w-36 h-36 mx-auto text-slate-100"
                />
                <p class="text-center text-slate-100 text-2xl">{{ warningMessage }}</p>
                <p>{{ apiUrl }}</p>
            </div>
            <div class="mt-4 flex gap-3 justify-between">
              <MainButton
                label="Yes! Delete"
                icon="solar:trash-bin-trash-bold-duotone"
                @click="handleSubmit(apiUrl)"
                overWriteClass=" w-full rounded-lg gap-1 text-xl"
              />
              <MainButton
                label="Close"
                icon="none"
                :handleSubmit="handleCancel"
              />
            </div>
      
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const isPopupOpen = ref(false);
  
  defineProps({
    label:{
      type: String,
      default: "Delete",
    },
    buttonType:{
      type: String,
      default: "text",
    },
    buttonLabel:{
      type: String,
      default: "Delete",
    },
    buttonIcon:{
      type: String,
      default: "solar:trash-bin-trash-bold-duotone",
    },
    buttonIconPosition:{
      type: String,
      default: "right",
    },
    icon:{
      type: String,
      default: "solar:trash-bin-trash-bold-duotone",
    },
    warningMessage:{
      type: String,
      default: "Are you sure you want to delete this item?",
    },
    apiUrl:{
      type: String,
      required: true,
      default: "/api",
    },
  });
  const handleSubmit = (apiUrl) => {
    console.log(`Deleting item from: ${apiUrl}`);
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
  