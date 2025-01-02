<template>
  <div class="bg-slate-950">
    <NuxtLayout>
      <NuxtPage class="bg-slate-900 w-full h-full rounded-xl p-3 shadow-lg bg-opacity-30 text-slate-100 border-[1px] border-slate-900" />
    </NuxtLayout>
  </div>
</template>
<style>

  /* ===== Scrollbar CSS ===== */
  ::-webkit-scrollbar {
  width: 5px;
  height: 0px;
}
::-webkit-scrollbar-button {
  width: 2px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  @apply bg-slate-600;
  border: 0px none #ffffff00;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-400;
}
::-webkit-scrollbar-thumb:active {
  @apply bg-slate-500;
}
::-webkit-scrollbar-track {
  @apply bg-slate-950;
}
::-webkit-scrollbar-track:hover {
  @apply bg-transparent;
}
::-webkit-scrollbar-track:active {
  @apply bg-transparent;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>