<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row justify-center items-center gap-1">
        <h1 class="text-2xl font-medium">Add Locations</h1>
        <button
          class="flex items-center justify-center"
          aria-label="Youtube"
          @click="addField"
        >
          <Icon name="solar:add-square-bold-duotone" class="w-8 h-8" />
        </button>
      </div>

      <!-- Submit Button -->
      <MainButton
        label="Save"
        icon="solar:file-send-bold-duotone"
        :handleSubmit="handleSubmit"
      />
    </div>

    <!-- Dynamic Form Fields -->
    <form
      :legend="`Location ${index + 1}`"
      v-for="(field, index) in fields"
      :key="index"
      class="mt-8 border border-slate-800 p-4 rounded-lg relative"
    >
      <span
        class="text-sm font-medium bg-slate-800 absolute -top-3 right-6 px-3 py-1 rounded-lg"
        >Location {{ index + 1 }}</span
      >
      <div>
        <label class="block text-sm font-medium mb-1">Name</label>
        <input v-model="field.name" placeholder="Name" />
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Address</label>
            <Textarea
              v-model="field.address"
              placeholder="Address"
              class="h-[100px]"
            />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Latitude</label>
            <input v-model="field.latitude" placeholder="Latitude" />
            <label class="block text-sm font-medium mb-1">Longitude</label>
            <input v-model="field.longitude" placeholder="Longitude" />
          </div>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">City</label>
            <input v-model="field.city" placeholder="City" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Zip</label>
            <input v-model="field.zip" placeholder="Zip" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">State</label>
            <input v-model="field.state" placeholder="State" />
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">Phone</label>
            <input v-model="field.phone" placeholder="Phone" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">Email</label>
            <input v-model="field.email" placeholder="Email" />
          </div>
        </div>
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
const fields = ref([
  {
    name: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    phone: "",
    email: "",
    latitude: "",
    longitude: "",
  },
]); // Reactive state for form fields
const submitted = ref(false);

// Function to add a new field
const addField = () => {
  fields.value.push({
    name: "",
    address: "",
    city: "",
    zip: "",
    state: "",
    phone: "",
    email: "",
    latitude: "",
    longitude: "",
  });
};

// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style>
/* Add your custom styles here */
input,
textarea {
  @apply bg-transparent border-[1px] border-slate-800 w-[100%] rounded-md py-1 px-2 outline-none mb-2 block caret-slate-600;
}
</style>
