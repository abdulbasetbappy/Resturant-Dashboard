<template>
  <header
    class="mx-1 md:mx-3 mt-2 bg-slate-900 bg-opacity-30 border-[1px] border-slate-900 text-slate-800 z-50 shadow-lg rounded-xl animate-slide-down"
  >
    <div class="px-4 py-1 flex items-center justify-between h-16">
      <button
        class="mobile-menu-button lg:hidden"
        @click="$emit('toggleSidebar')"
      >
        <Icon
          name="solar:hamburger-menu-line-duotone"
          class="w-7 h-7 text-slate-100"
        />
      </button>
      <div class="text-2xl font-bold text-slate-100">
        Frontend<span class="text-indigo-800">Talks</span>
      </div>
      <div class="text-2xl font-bold text-slate-100 hidden md:block">
        <div class="flex justify-center items-center h-screen">
          <div class="relative">
            <input
              type="text"
              class="h-10 px-5 pr-10 bg-transparent rounded-full border border-slate-800 text-sm focus:outline-none transition-all duration-300 ease-in-out w-36 focus:w-72"
              placeholder="Search..."
            />
            <button
              type="submit"
              class="absolute right-0 top-0 mt-[0.3rem] mr-3"
            >
              <Icon
                name="solar:minimalistic-magnifer-zoom-in-linear"
                class="w-6 h-6 text-slate-300"
              />
            </button>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <div class="p-1 flex items-center justify-center cursor-pointer">

          <Icon
            name="solar:sun-2-bold-duotone"
            class="w-7 h-7 text-orange-400"
          />
          <!--
            <Icon
            name="solar:cloudy-moon-bold-duotone"
            class="w-7 h-7 text-orange-400"
          />
          -->
        </div>
        <div class="p-1  relative flex items-center justify-center cursor-pointer">
          <span
            class="absolute -top-2 -right-2 bg-slate-300 bg-opacity-100 rounded-full text-xs p-1"
            >2+</span
          >
          <Icon
            name="solar:bell-bing-bold-duotone"
            class="w-7 h-7 text-slate-100"
          />
        </div>
        <div
          class="flex items-center gap-1 md:px-2 cursor-pointer hover:bg-slate-800 hover:bg-opacity-30 transition-all duration-300 rounded-xl"
        >
          <img
            class="w-10 h-10 rounded-full transition-transform duration-300 hover:scale-110 object-cover"
            src="https://placehold.co/50x50"
            alt="Profile"
          />
          <div class="p-1 hidden md:block">
            <div class="text-slate-100 text-sm">Abdul Baset</div>
            <div class="text-xs text-slate-300">Admin</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
