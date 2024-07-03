<template>
    <div>
      <!-- Header -->
      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row gap-3">
          <h1 class="text-xl font-medium">Contacts</h1>
        </div>
        <div class="mr-16">
          <!-- Submit Button -->
          <button
            class="mt-4 bg-indigo-500 px-4 py-2 rounded-lg text-blue-50"
            @click="handleSubmit"
          >
            Save
          </button>
        </div>
      </div>
  
      <!-- Fields For Information -->
      <Fieldset legend="Business Information" class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
          <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  v-model="BusinessInfo.name"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="License">License/TIN</label>
                <input
                  type="text"
                  id="License"
                  placeholder="Enter License Number"
                  v-model="BusinessInfo.license"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Phone">Phone</label>
                <input
                  type="text"
                  id="Phone"
                  placeholder="Enter Phone Number"
                  v-model="BusinessInfo.phone"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="City">City</label>
                <input
                  type="text"
                  id="City"
                  placeholder="City Name"
                  v-model="BusinessInfo.city"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Zip">Zip</label>
                <input
                  type="text"
                  id="Zip"
                  placeholder="Enter Zip Code"
                  v-model="BusinessInfo.zip"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
          </div>
      </Fieldset>
      <!-- Fields For Social Information -->
      <Fieldset legend="Social Information" class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
          <div class="grid grid-cols-2 gap-4">
            <div>
                <label for="Facebook">Facebook</label>
                <input
                  type="text"
                  id="Facebook"
                  placeholder="Enter Facebook URL"
                  v-model="SocialInfo.facebook"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Twitter">Twitter</label>
                <input
                  type="text"
                  id="Twitter"
                  placeholder="Enter Twitter URL"
                  v-model="SocialInfo.twitter"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Youtube">Youtube</label>
                <input
                  type="text"
                  id="Youtube"
                  placeholder="Enter Youtube URL"
                  v-model="SocialInfo.youtube"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="TikTok">TikTok</label>
                <input
                  type="text"
                  id="TikTok"
                  placeholder="Enter TikTok URL"
                  v-model="SocialInfo.tiktok"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
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
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
            <div>
                <label for="Pinterest">Pinterest</label>
                <input
                  type="text"
                  id="Pinterest"
                  placeholder="Enter Pinterest URL"
                  v-model="SocialInfo.pinterest"
                  class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
                />
  
            </div>
          </div>
      </Fieldset>
  
  
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
        name: '',
        license: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });
    const SocialInfo = reactive({
      facebook: '',
      twitter: '',
      instagram: '',
      youtube: '',
      linkedin: '',
      tiktok: '',
      google_map: '',
      pinterest: '',
    });
  
  // Function to handle form submission
  const handleSubmit = () => {
    submitted.value = true;
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  