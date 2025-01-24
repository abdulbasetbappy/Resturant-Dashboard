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
      class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-start justify-center z-50 overflow-y-scroll"
    >
      <div
        class="bg-slate-800 opacity-100 w-[38rem] my-4 p-6 rounded-lg shadow-lg animate-fadeIn relative"
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

        <div>
          <h2 class="text-xl font-bold mb-4 text-slate-100">Active Options</h2>
          <div
            class="flex flex-row gap-4 items-center py-1 px-2 mt-2 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <Icon
              name="solar:slider-horizontal-bold-duotone"
              class="w-10 h-10 opacity-50 cursor-move"
            />
            <div class="flex justify-between w-full items-center">
              <div>
                <h3>Options title</h3>
                <p>All Options Items Name</p>
              </div>
              <!--Delete and Edit Icon-->
              <div class="flex flex-row gap-2 items-center">
                <MainButton
                  label="none"
                  icon="solar:trash-bin-trash-bold-duotone"
                  iconPosition="right"
                  overWriteClass="rounded-lg bg-opacity-0"
                  iconClass="w-8 h-8"
                  @click="isPopupOpen = true"
                />
                <MainButton
                  label="none"
                  icon="solar:pen-new-square-bold-duotone"
                  iconPosition="right"
                  overWriteClass="rounded-lg bg-opacity-0"
                  iconClass="w-8 h-8"
                  @click="isPopupOpen = true"
                />
              </div>
            </div>
          </div>
          <div
            class="flex flex-row gap-4 items-center py-1 px-2 mt-2 bg-slate-700 bg-opacity-50 rounded-lg"
          >
            <Icon
              name="solar:slider-horizontal-bold-duotone"
              class="w-10 h-10 opacity-50 cursor-move"
            />
            <div class="flex justify-between w-full items-center">
              <div>
                <h3>Options title</h3>
                <p>All Options Items Name</p>
              </div>
              <!--Delete and Edit Icon-->
              <div class="flex flex-row gap-2 items-center">
                <MainButton
                  label="none"
                  icon="solar:trash-bin-trash-bold-duotone"
                  iconPosition="right"
                  overWriteClass="rounded-lg bg-opacity-0"
                  iconClass="w-8 h-8"
                  @click="isPopupOpen = true"
                />
                <MainButton
                  label="none"
                  icon="solar:pen-new-square-bold-duotone"
                  iconPosition="right"
                  overWriteClass="rounded-lg bg-opacity-0"
                  iconClass="w-8 h-8"
                  @click="isPopupOpen = true"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4 text-slate-100">Customizations</h2>
          <div>
            <div
              class="tabs-container flex items-center justify-around gap-10 mt-2"
            >
              <!-- Tabs -->
              <button
                v-for="tab in tabs"
                :key="tab.name"
                @click="selectTab(tab.name)"
                :class="[
                  'text-base font-medium p-2 py-1 rounded-md border-2 transition-all ease-in-out duration-300',
                  activeTab === tab.name
                    ? 'text-slate-600 border-slate-600'
                    : 'text-gray-600 border-transparent rounded-md hover:text-slate-500 hover:border-slate-500',
                ]"
              >
                {{ tab.name }}
              </button>
            </div>
            <div class="m-6">
              <MenuOptionsCreate v-if="activeTab === 'Create'" />
              <MenuOptionsExisting v-if="activeTab === 'Use Exeisting'" />
              <MenuOptionsDuplicate v-if="activeTab === 'Duplicate'" />
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-bold mb-4 text-slate-100">Apply On</h2>
          <div>
            <ul>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
                <li>Menu</li>
                <li>Category</li>
                <li>Item</li>
            </ul>
          </div>
        </div>

        <form @submit.prevent="handleSubmit(apiUrl)">
          <div class="mt-4 flex gap-3 justify-between">
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

// Tabs data
const tabs = ref([
  { name: "Create" },
  { name: "Use Exeisting" },
  { name: "Duplicate" },
]);

// Active tab state
const activeTab = ref(tabs.value[0].name);

// Select a tab
const selectTab = (tabName) => {
  activeTab.value = tabName;
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
