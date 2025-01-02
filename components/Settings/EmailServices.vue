<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
        <h1 class="text-2xl font-medium">Email SMTP Information</h1>
      </div>
      <div class="">
        <!-- Submit Button -->
        <MainButton
          label="Save"
          icon="solar:file-send-bold-duotone"
          :handleSubmit="handleSubmit"
        />
      </div>
    </div>

    <!-- Fields For Stripe -->
    <form class="mt-4 p-4 pt-0">
        <div>
          <label for="host">Host</label>
          <input
            type="text"
            id="host"
            placeholder="smtp.gmail.com"
            v-model="fields.host"
            class=""
          />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
              <label for="port">PORT</label>
              <input
                type="text"
                id="port"
                placeholder="127.0.0.1"
                v-model="fields.port"
                class=""
              />

          </div>
          <div>
              <label for="from_name">From</label>
              <input
                type="text"
                id="from_name"
                placeholder="Enter From Name"
                v-model="fields.from_name"
                class=""
              />

          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
              <label for="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter Username"
                v-model="fields.username"
                class=""
              />

          </div>
          <div>
              <label for="Password">Password</label>
              <input
                type="password"
                id="Password"
                placeholder="Enter Password"
                v-model="fields.password"
                class=""
              />

          </div>
        </div>
        <div>
          <label for="Admin_Email">Admin Email</label>
          <input
            type="email"
            id="Admin_Email"
            placeholder="Enter Admin Email"
            v-model="fields.admin_email"
            class=""
          />
        </div>
    </form>


    <!-- Display Collected Data -->
    <div v-if="submitted" class="mt-4">
      <h2 class="text-xl font-medium">Collected Data</h2>
      <pre>{{ fields }}</pre>
    </div>
  </div>
</template>

<script setup>
const submitted = ref(false);

  // Define the form fields object
  const fields = reactive({
    port: '',
    host:'',
    from_name: '',
    username: '',
    password: '',
    admin_email: '',
  });

// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
