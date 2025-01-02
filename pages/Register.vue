<template>
  <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
      ></div>
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-400 to-slate-600 shadow-lg transform -skew-y-12 sm:skew-y-1 sm:-rotate-12 sm:rounded-3xl opacity-20"
      ></div>
      <div
        class="relative px-2 py-10 bg-slate-100 shadow-lg sm:rounded-3xl sm:p-16"
      >
        <div class="max-w-md mx-auto">
          <div class="text-4xl font-bold text-slate-900 text-center">
        Frontend<span class="text-indigo-800">Talks</span>
      </div>

          <div class="divide-y divide-slate-200">
            <div
              class="py-4 text-base leading-6 space-y-8 text-gray-700 sm:text-lg sm:leading-7"
            >
              <div class="relative pb-2">
                <input
                  autocomplete="off"
                  id="email"
                  name="email"
                  type="text"
                  class="peer cursor-pointer caret-slate-500 placeholder-transparent h-10 w-[350px] border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="Email address"
                  v-model="user.email"
                />
                <label
                  for="email"
                  class="absolute left-0 -top-3.5 text-gray-600 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:font-semibold peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm cursor-pointer"
                  >Email Address</label
                >
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  class="peer placeholder-transparent caret-slate-500 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 cursor-pointer"
                  placeholder="Password"
                  v-model="user.password"
                />
                <label
                  for="password"
                  class="absolute left-0 -top-3.5 text-gray-600 text-base peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-placeholder-shown:font-semibold peer-focus:text-sm cursor-pointer"
                  >Password</label
                >
              </div>
              <div class="relative">
                <NuxtLink
                  to="/"
                  class="bg-slate-700 text-slate-100 rounded-md px-2 py-3 w-full font-semibold text-lg flex items-center justify-center gap-3"
                >
                  Log in <Icon name="solar:login-3-line-duotone" class="w-6 h-6" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'fullpage',
})
interface User {
  email: string
  password: string
}
const user = reactive<User>({
  email: '',
  password: ''
})
</script>

<style scoped></style>
