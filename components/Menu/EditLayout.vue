<template>
  <div class="py-2">
    <!--Menu Categories-->
    <div v-for="category in CategoriesWithItems" :key="category.id">
      <div
        class="flex flex-row gap-4 items-center p-2 mt-2 bg-slate-800 bg-opacity-50 rounded-lg"
      >
        <img :src="category.image" alt="" class="rounded-lg" />
        <div class="w-full flex flex-row items-center justify-between">
          <div>
            <h2 class="font-semibold text-xl">
              {{ category.name }} {{ category.items.length }}
            </h2>
            <p class="text-xs">
              {{ category.description }}
            </p>
          </div>
          <div class="flex flex-row gap-2 items-center">
            <!-- Submit Button -->
            <MenuCreatePopup
              label="Add New Item"
              buttonType="icon"
              buttonIcon="solar:add-circle-bold-duotone"
              buttonIconPosition="right"
              nameLabel="Item's Name"
              namePlaceholder="Enter Item's name"
              descriptionLabel="Description"
              descriptionPlaceholder="Enter Item's description"
            />
            <Icon
              name="solar:branching-paths-up-bold-duotone"
              class="w-7 h-7 cursor-pointer"
            />
            <Icon
              name="solar:pen-new-round-bold-duotone"
              class="w-7 h-7 cursor-pointer"
            />
            <Icon
              name="solar:trash-bin-trash-bold-duotone"
              class="w-7 h-7 cursor-pointer"
            />
          </div>
        </div>
      </div>
      <!--Menu Items-->
      <div
        class="flex flex-row gap-4 items-center p-2 bg-slate-800 bg-opacity-35 rounded-lg my-2 ml-6"
        v-for="item in category.items"
        :key="item.id"
      >
        <Icon
          name="solar:slider-horizontal-bold-duotone"
          class="w-10 h-10 opacity-50"
        />
        <img :src="item.image" alt="" class="rounded-lg" />
        <div class="w-full flex flex-row items-center justify-between">
          <div>
            <h2 class="font-semibold text-lg p-0 m-0">{{ item.name }}</h2>

            <p class="text-xs">
              {{ item.description }}
            </p>
          </div>
          <div class="flex flex-row gap-8 items-center">
            <input
              type="number"
              name="price"
              id=""
              :value="item.price"
              class="w-16 h-8 text-md font-semibold px-2 m-0 p-0 bg-slate-800 text-white rounded-lg"
            />

            <div class="flex flex-row gap-3 items-center opacity-75 pr-3">
              <Icon
                name="solar:eye-scan-bold-duotone"
                class="w-6 h-6 cursor-pointer"
              />
              <Icon
                name="solar:ruler-cross-pen-bold-duotone"
                class="w-6 h-6 cursor-pointer"
              />
              <Icon
                name="solar:copy-bold-duotone"
                class="w-6 h-6 cursor-pointer"
              />
              <Icon
                name="solar:trash-bin-trash-bold-duotone"
                class="w-6 h-6 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-row items-center justify-center p-2">
        <MenuCreatePopup
          label="Add New Item"
          buttonType="text"
          nameLabel="Item's Name"
          namePlaceholder="Enter item's name"
          descriptionLabel="Description"
          descriptionPlaceholder="Enter items's description"
          customBtnClass="w-[62rem] ml-6 p-2 bg-opacity-0 text-slate-300 font-semibold py-2 rounded-lg border-dashed border-2 border-slate-700"
        />
      </div>
    </div>
    <!--Add Category Button-->
    <div class="flex items-center justify-center">
      <MenuCreatePopup
        label="Add New Category"
        buttonType="text"
        nameLabel="Category Name"
        namePlaceholder="Enter Category name"
        descriptionLabel="Description"
        descriptionPlaceholder="Enter Category description"
        customBtnClass="w-[64rem] h-16 p-2 bg-opacity-0 text-slate-300 font-semibold py-2 rounded-lg border-dashed border-2 border-slate-700"
      />
    </div>
  </div>
</template>

<script setup>
const CategoriesWithItems = [
  {
    id: 1,
    name: "Starters",
    image: "https://placehold.co/50x50",
    description: "Category 1 Description",
    items: [
      {
        id: 1,
        name: "Item 1",
        description:
          "Starters - Item 1 Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus, pariatur a quibusdam quasi ipsa nulla eos assumenda deserunt officiis.",
        price: 10.99,
        image: "https://placehold.co/50x50",
      },
      {
        id: 2,
        name: "Item 2",
        description:
          "Starters - Item 2 Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus, pariatur a quibusdam.",
        price: 20.99,
        image: "https://placehold.co/50x50",
      },
    ],
  },
  {
    id: 2,
    name: "Main Course",
    image: "https://placehold.co/50x50",
    description: "Category 2 Description",
    items: [
      {
        id: 3,
        name: "Item 1",
        description:
          "Main Course - Item 1 Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus, pariatur a quibusdam quasi ipsa nulla eos assumenda deserunt officiis.",
        price: 30,
        image: "https://placehold.co/50x50",
      },
      {
        id: 4,
        name: "Item 2",
        description:
          "Main Course - Item 2 Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus, pariatur a quibusdam quasi ipsa nulla eos assumenda deserunt officiis.",
        price: 40,
        image: "https://placehold.co/50x50",
      },
    ],
  },
];
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
