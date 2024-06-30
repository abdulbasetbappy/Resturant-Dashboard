<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-cover bg-center relative">
    <div class="max-w-md w-full space-y-8 p-10 bg-indigo-900 bg-opacity-30 backdrop-filter backdrop-blur-sm rounded-lg shadow-lg">
      <h2 class="text-center text-3xl font-extrabold text-indigo-900">Sign in to your account</h2>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="rounded-md shadow-sm flex gap-2 flex-col">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              required
              v-model="email"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent placeholder-gray-500 text-indigo-950 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="appearance-none rounded-md relative block w-full px-3 py-2 border border-transparent placeholder-gray-500 text-indigo-950 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="group relative w-full cursor-pointer flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Sign In
          </button>
        </div>
        <div>
          <p class="text-center text-sm text-gray-500">
            Don't have an account? <a to="#" class="font-medium text-indigo-600 hover:text-indigo-700">Sign up</a>
          </p>
        </div>
      </form>
    </div>

    <!-- Footer Background with Animation -->
    <div class="new_footer_top">
      <div class="footer_bg">
        <div class="footer_bg_one"></div>
        <div class="footer_bg_two"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Add your login logic here
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    }
  }
}
</script>

<style>

/* Footer background and animation */
.new_footer_top .footer_bg {
  position: absolute;
  left: 0;
  bottom: 0;
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigB8iI5tb8WSVBuVUGc9UjjB8O0708X7Fdic_4O1LT4CmLHoiwhanLXiRhe82yw0R7LgACQ2IhZaTY0hhmGi0gYp_Ynb49CVzfmXtYHUVKgXXpWvJ_oYT8cB4vzsnJLe3iCwuzj-w6PeYq_JaHmy_CoGoa6nw0FBo-2xLdOPvsLTh_fmYH2xhkaZ-OGQ/s16000/footer_bg.png") no-repeat scroll center ;
  width: 100%;
  height: 266px;
  overflow-x: hidden;
  z-index: -1;
}

.new_footer_top .footer_bg .footer_bg_one {
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEia0PYPxwT5ifToyP3SNZeQWfJEWrUENYA5IXM6sN5vLwAKvaJS1pQVu8mOFFUa_ET4JuHNTFAxKURFerJYHDUWXLXl1vDofYXuij45JZelYOjEFoCOn7E6Vxu0fwV7ACPzArcno1rYuVxGB7JY6G7__e4_KZW4lTYIaHSLVaVLzklZBLZnQw047oq5-Q/s16000/volks.gif") no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  -webkit-animation: myFirst 22s linear infinite;
  animation: myFirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
  background: url("https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLGwEUVwPK6Vi8xXMymsc-ZXVwLWyXhogZxbcXQYSY55REw_0D4VTQnsVzCrL7nsyjd0P7RVOI5NKJbQ75koZIalD8mqbMquP20fL3DxsWngKkOLOzoOf9sMuxlbyfkIBTsDw5WFUj-YJiI50yzgVjF8cZPHhEjkOP_PRTQXDHEq8AyWpBiJdN9SfQA/s16000/cyclist.gif") no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 28%;
  position: absolute;
  -webkit-animation: myFirst 30s linear infinite;
  animation: myFirst 30s linear infinite;
}

@keyframes myFirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}
</style>
