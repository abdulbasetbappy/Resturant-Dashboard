<template>
    <div class="flex h-screen">
      <SideBar class="w-64 xs:hidden md:block bg-gray-900 z-20 text-white" />
      <div class="flex-1 flex flex-col">
        <AppBar class="bg-gray-800 text-white" />
        <BreadCrumb />
        <main class="flex-1 overflow-y-auto p-4">
          <NuxtPage />
        </main>
      </div>
    </div>
  </template>