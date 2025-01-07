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
          label="ReOrder"
          icon="solar:repeat-one-minimalistic-bold-duotone"
          :handleSubmit="handleSubmit"
        />
      </div>
    </div>
    <MainHorizontalRow />

    <!--Menu Data-->
    <div class="flex flex-row gap-4 py-2 w-full mb-6">
      <div>
        <img
          src="https://placehold.co/210x180"
          alt=""
          class="rounded-lg object-cover"
        />
      </div>
      <div class="flex flex-col gap-4 items-center justify-start w-full">
        <div class="flex flex-col w-full">
          <div class="flex flex-row gap-3 items-center justify-between w-full">
            <div>
              <h2 class="font-semibold text-2xl text-wrap">Menu Name</h2>
              <p class="text-sm text-wrap">
                Menu Short Description. Menu Short Description. Menu Short
                Description
              </p>
            </div>

            <MainButton
              label="Edit"
              icon="solar:pen-new-square-bold-duotone"
              :handleSubmit="handleSubmit"
            />
          </div>

          <!--Active Time-->

          <div class="mt-3">
            <div class="flex flex-row gap-2 items-center justify-start">
              <Icon name="solar:calendar-bold-duotone" class="w-6 h-6" />
              <span class="font-semibold text-lg">Active Days and Time</span>
            </div>
            <!--7 days & Times-->
            <div class="grid grid-cols-7 gap-4">
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Monday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Tuesday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Wednesday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Thursday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Friday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Saturday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
              <div class="flex flex-col gap-1">
                <span class="font-semibold">Sunday</span>
                <span class="text-sm">10:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Menu Items-->
    <MenuCreateLayout />
  </div>
</template>

<script setup>
//current menu path
const router = useRouter();
</script>

<style scoped></style>
