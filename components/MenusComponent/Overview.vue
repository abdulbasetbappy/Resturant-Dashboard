<template>
  <!-- Search And Buttons-->
  <div class="flex justify-between items-center mb-4">
    <div class="flex items-center gap-4 w-full">
      <div class="w-full relative">
        <Icon
          name="heroicons-outline:search"
          class="w-5 h-5 text-gray-500 inline-block absolute top-3 left-2"
        />
        <input
          type="text"
          class="outline-none border rounded-lg p-2 w-full pl-10"
          placeholder="Search for items..."
        />
      </div>

      <!-- Collapse or Expand -->
      <button
        @click="isCollapsed"
        class="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center justify-center"
      >
        <Icon
          v-if="!collapsed"
          name="material-symbols:collapse-all-rounded"
          class="w-5 h-5 inline-block"
        />

        <Icon
          v-else
          name="material-symbols:expand-all-rounded"
          class="w-5 h-5 inline-block"
        />
      </button>
      <div class="relative inline-block">
  <!-- Add Button -->
  <button
    @click="toggleAddDropdown"
    class="bg-gray-500 text-white px-4 py-2 flex items-center justify-center gap-2 rounded-full"
  >
    <span>Add</span>
    <Icon name="heroicons-outline:plus" class="w-5 h-5 inline-block" />
  </button>

  <!-- Dropdown Menu -->
  <div
    v-if="showDropdown"
    class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
  >
    <ul>
      <li>
        <button
          @click="handleAddItems"
          class="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-t-lg"
        >
          Add Items
        </button>
      </li>
      <li>
        <button
          @click="handleAddCategory"
          class="w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          Add Category
        </button>
      </li>
      <li>
        <button
          @click="handleAddOptions"
          class="w-full px-4 py-2 text-left hover:bg-gray-100 rounded-b-lg"
        >
          Add Options
        </button>
      </li>
    </ul>
  </div>
</div>

      <!-- Save Button -->
      <button
        class="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2"
      >
        <span>Save</span>
        <Icon
          name="material-symbols:save-rounded"
          class="w-5 h-5 inline-block"
        />
      </button>
    </div>
  </div>

  <div class="p-4">
    <!-- Draggable Categories -->
    <ul>
      <transition-group name="fade" mode="out-in" tag="div">
        <li
          v-for="(category, catIndex) in categories"
          :key="category.id"
          @dragstart="dragCategoryStart(catIndex)"
          @dragover.prevent
          @drop="dropCategory(catIndex)"
          draggable="true"
          class="bg-white border-b border-gray-200 rounded-md mb-2 shadow-sm cursor-move transition-transform duration-200 ease-in-out"
        >
          <div class="flex justify-start gap-3 items-center">
            <Icon
              name="heroicons-outline:menu"
              class="w-5 h-5 text-gray-500 inline-block"
            />
            <div
              @click="toggleDropdown(catIndex)"
              class="cursor-pointer p-4 flex justify-between items-center space-x-2 w-full"
            >
              <div>
                <span class="font-semibold">{{ category.name }}</span>
                <span class="text-gray-500 text-sm mx-2"
                  >{{ category.items.length }} items</span
                >
              </div>
              <span
                :class="{ 'rotate-180': category.dropdownOpen }"
                class="flex items-center justify-center"
              >
                <Icon
                  name="material-symbols:keyboard-arrow-down-rounded"
                  class="w-6 h-6 text-gray-500"
                />
              </span>
            </div>
          </div>
          <!-- Draggable Items Inside Dropdown -->
          <transition-group name="fade" mode="out-in" tag="ul" class="pl-4">
            <li
              v-if="category.dropdownOpen"
              v-for="(item, itemIndex) in category.items"
              :key="item.id"
              @dragstart="dragItemStart(catIndex, itemIndex)"
              @dragover.prevent
              @drop="dropItem(catIndex, itemIndex)"
              draggable="true"
              class="bg-gray-100 border-b border-gray-300 rounded-md gap-3 flex items-center space-x-4 shadow-sm cursor-move transition-transform duration-200 ease-in-out"
            >
              <Icon
                name="heroicons-outline:menu"
                class="w-5 h-5 text-gray-500 inline-block"
              />
              <div class="flex items-center gap-3 p-2 cursor-pointer w-full">
                <img
                  :src="item.image"
                  alt="item image"
                  class="w-10 h-10 rounded-md"
                />
                <div class="flex justify-between items-center gap-3 w-full">
                  <div>
                    <h3 class="font-semibold">{{ item.title }}</h3>
                    <p class="text-gray-500 text-sm">{{ item.subtitle }}</p>
                  </div>
                  <div class="flex items-center">
                    <input
                      :value="item.price"
                      type="text"
                      class="outline-none border rounded-lg p-2 w-28"
                    />
                  </div>
                </div>
              </div>
            </li>
            <!--Add Items Button-->
            <li v-if="category.dropdownOpen" class="p-2 border-none">
              <button
                class="bg-gray-500 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2"
              >
                <Icon
                  name="heroicons-outline:plus"
                  class="w-5 h-5 inline-block"
                />
                <span>Add Item</span>
              </button>
            </li>
          </transition-group>
        </li>
      </transition-group>
    </ul>
    <!-- Updated Data Structure Display -->
    <div class="mt-6 p-4 bg-gray-50 rounded-md shadow-md">
      <h3 class="font-semibold text-lg mb-4">Updated Data Structure</h3>
      <pre class="bg-white p-4 rounded-md shadow-sm text-sm overflow-auto">{{
        categories
      }}</pre>
    </div>
  </div>
</template>

<script setup>
const categories = ref([
  {
    id: 1,
    name: "Sandwiches",
    items: [
      {
        id: 1,
        image: "https://placehold.co/50x50",
        title: "Chicken Sandwich",
        subtitle: "Grilled chicken with lettuce",
        price: "$5.99",
      },
      {
        id: 2,
        image: "https://placehold.co/50x50",
        title: "Veggie Sandwich",
        subtitle: "Fresh veggies with hummus",
        price: "$4.99",
      },
    ],
  },
  {
    id: 2,
    name: "Burgers",
    items: [
      {
        id: 1,
        image: "https://placehold.co/50x50",
        title: "Beef Burger",
        subtitle: "Juicy beef patty with cheese",
        price: "$8.99",
      },
      {
        id: 2,
        image: "https://placehold.co/50x50",
        title: "Veggie Burger",
        subtitle: "Grilled veggies with sauce",
        price: "$7.99",
      },
    ],
  },
]);

const draggedCategoryIndex = ref(null);
const draggedItemIndex = ref(null);
const draggedCategory = ref(null);

const dragCategoryStart = (index) => {
  draggedCategoryIndex.value = index;
  draggedCategory.value = categories.value[index];
};

const dropCategory = (index) => {
  const draggedData = categories.value.splice(draggedCategoryIndex.value, 1)[0];
  categories.value.splice(index, 0, draggedData);
  draggedCategoryIndex.value = null;
};

const dragItemStart = (catIndex, itemIndex) => {
  draggedCategoryIndex.value = catIndex;
  draggedItemIndex.value = itemIndex;
};

const dropItem = (catIndex, itemIndex) => {
  const draggedItemData = categories.value[
    draggedCategoryIndex.value
  ].items.splice(draggedItemIndex.value, 1)[0];
  categories.value[catIndex].items.splice(itemIndex, 0, draggedItemData);
  draggedCategoryIndex.value = null;
  draggedItemIndex.value = null;
};

const toggleDropdown = (index) => {
  categories.value[index].dropdownOpen = !categories.value[index].dropdownOpen;
};

const collapsed = ref(false);

const isCollapsed = () => {
  collapsed.value = !collapsed.value;
};

const showDropdown = ref(false);

const toggleAddDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const handleAddItems = () => {
  console.log("Add Items clicked");
  showDropdown.value = false;
};

const handleAddCategory = () => {
  console.log("Add Category clicked");
  showDropdown.value = false;
};

const handleAddOptions = () => {
  console.log("Add Options clicked");
  showDropdown.value = false;
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
}
</style>
