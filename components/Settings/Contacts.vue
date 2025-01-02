<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
        <h1 class="text-2xl font-medium">Contacts</h1>
      </div>
      <div>
        <!-- Submit Button -->
        <MainButton
          label="Save"
          icon="solar:file-send-bold-duotone"
          :handleSubmit="handleSubmit"
        />
      </div>
    </div>

    <!-- Fields For Information -->
    <form legend="Business Information" class="mt-4 p-4 pt-0">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            v-model="BusinessInfo.name"
          />
        </div>
        <div>
          <label for="License">License/TIN</label>
          <input
            type="text"
            id="License"
            placeholder="Enter License Number"
            v-model="BusinessInfo.license"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="Email">Email</label>
          <input
            type="email"
            id="Email"
            placeholder="Enter Email"
            v-model="BusinessInfo.email"
          />
        </div>
        <div>
          <label for="Phone">Phone</label>
          <input
            type="text"
            id="Phone"
            placeholder="Enter Phone Number"
            v-model="BusinessInfo.phone"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="Address">Address</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter Address"
            v-model="BusinessInfo.address"
          />
        </div>
        <div>
          <label for="City">City</label>
          <input
            type="text"
            id="City"
            placeholder="City Name"
            v-model="BusinessInfo.city"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="State">State</label>
          <input
            type="text"
            id="State"
            placeholder="State Name"
            v-model="BusinessInfo.state"
          />
        </div>
        <div>
          <label for="Zip">Zip</label>
          <input
            type="text"
            id="Zip"
            placeholder="Enter Zip Code"
            v-model="BusinessInfo.zip"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="Country">Country</label>
          <input
            type="text"
            id="Country"
            placeholder="Enter Country Name"
            v-model="BusinessInfo.country"
          />
        </div>
      </div>
    </form>
    <!-- Fields For Social Information -->
    <h2 class="text-xl mt-6 underline underline-offset-4 font-semibold">
      Social Information
    </h2>
    <form class="mt-4 p-4 pt-0">
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="Facebook">Facebook</label>
          <input
            type="text"
            id="Facebook"
            placeholder="Enter Facebook URL"
            v-model="SocialInfo.facebook"
          />
        </div>
        <div>
          <label for="Twitter">Twitter</label>
          <input
            type="text"
            id="Twitter"
            placeholder="Enter Twitter URL"
            v-model="SocialInfo.twitter"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="Instagram">Instagram</label>
          <input
            type="text"
            id="Instagram"
            placeholder="Enter Instagram URL"
            v-model="SocialInfo.instagram"
          />
        </div>
        <div>
          <label for="Youtube">Youtube</label>
          <input
            type="text"
            id="Youtube"
            placeholder="Enter Youtube URL"
            v-model="SocialInfo.youtube"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="LinkedIn">LinkedIn</label>
          <input
            type="text"
            id="LinkedIn"
            placeholder="Enter LinkedIn URL"
            v-model="SocialInfo.linkedin"
          />
        </div>
        <div>
          <label for="TikTok">TikTok</label>
          <input
            type="text"
            id="TikTok"
            placeholder="Enter TikTok URL"
            v-model="SocialInfo.tiktok"
          />
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label for="Google_Map">Google Map</label>
          <input
            type="text"
            id="Google_Map"
            placeholder="Enter Google Map URL"
            v-model="SocialInfo.google_map"
          />
        </div>
        <div>
          <label for="Pinterest">Pinterest</label>
          <input
            type="text"
            id="Pinterest"
            placeholder="Enter Pinterest URL"
            v-model="SocialInfo.pinterest"
          />
        </div>
      </div>
    </form>

    <!-- Display Collected Data -->
    <div v-if="submitted" class="mt-4">
      <h2 class="text-xl font-medium">Collected Data</h2>
      <pre>
          Business Information: {{ BusinessInfo }}
          Social Information: {{ SocialInfo }}
      </pre>
    </div>
  </div>
</template>

<script setup>
const submitted = ref(false);

// Define the form fields object
const BusinessInfo = reactive({
  name: "",
  license: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  country: "",
});
const SocialInfo = reactive({
  facebook: "",
  twitter: "",
  instagram: "",
  youtube: "",
  linkedin: "",
  tiktok: "",
  google_map: "",
  pinterest: "",
});

// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
