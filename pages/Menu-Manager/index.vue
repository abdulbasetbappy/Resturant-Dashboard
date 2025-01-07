<template>
    <div class="p-4">
      <!-- Header -->
      <div class="flex flex-row justify-between items-start">
        <div class="flex flex-row gap-3">
          <h1 class="text-2xl font-medium">Menu Manager</h1>
        </div>
        <div>
          <!-- Submit Button -->
          <MenuCreatePopup/>
        </div>

      </div>
      <MainHorizontalRow/>
      <!-- Fields For Information -->
      <div class="grid grid-cols-3 gap-4 p-4">
        <div
          class="border-[1px] border-slate-800 rounded-lg flex flex-col gap-1 overflow-hidden"
        >
          <img src="https://placehold.co/350x250" alt="" class="p-1 rounded-lg" />
          <h2 class="font-semibold text-xl px-2 text-wrap">Menu Name</h2>
          <p class="text-sm px-2 text-wrap">
            Menu Short Description. Menu Short Description. Menu Short Description
          </p>

          <div class="p-2 pb-4 flex flex-row justify-around gap-2 w-full">
            <NuxtLink to="/Menu-Manager/menu-name" class="flex flex-row justify-center items-center gap-1 bg-slate-700 rounded-md py-3 w-full">
              <span>Edit</span> <Icon name="solar:ruler-cross-pen-bold-duotone" class="w-6 h-6"/>
            </NuxtLink>
            <MenuDeletePopup
            label="Delete Menu"
            buttonType="both"
            buttonLabel="Delete"
            buttonIcon="solar:trash-bin-trash-bold-duotone"
            buttonIconPosition="right"
            icon="solar:trash-bin-trash-bold-duotone"
            warningMessage="Are you sure! you want to delete this menu?"
            apiUrl="/api/menu"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>


</script>
  
  <style scoped></style>
  