<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
        <h1 class="text-xl font-medium">Payments</h1>
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

    <!-- Fields For Stripe -->
    <Fieldset class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
      <template #legend>
        <div class="flex justify-center items-center flex-row px-4 gap-4">
          <InputSwitch v-model="Stripe.checked" />
          <h2 class="text-lg font-medium">Stripe</h2>
        </div>
      </template>
      <BlockUI :blocked="Stripe.checked">
        <div>
          <label for="stripe_account_number">Public Key</label>
          <input
            type="password"
            id="stripe_account_number"
            placeholder="Vh_KT__B9a__8H__wef5T"
            v-model="Stripe.stripe_Public_key"
            class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
          />
        </div>
        <div>
          <label for="stripe_account_number">Private Key</label>
          <input
            type="password"
            id="stripe_account_number"
            placeholder="X_h__2kwa__8H__wefDa"
            v-model="Stripe.stripe_Private_key"
            class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
          />
        </div>
        <!--lock Icon If Checked-->
        <Icon
          name="material-symbols:shield-locked-rounded"
          class="w-16 h-16 text-gray-900 absolute top-6 left-[45%]"
          v-if="Stripe.checked"
        />
      </BlockUI>
    </Fieldset>

    <!-- Fields For Paypal -->
    <Fieldset class="mt-4 border border-gray-300 p-4 pt-0 mr-16">
      <template #legend>
        <div class="flex justify-center items-center flex-row px-4 gap-4">
          <InputSwitch v-model="Paypal.checked" />
          <h2 class="text-lg font-medium">Paypal</h2>
        </div>
      </template>
      <BlockUI :blocked="Paypal.checked">
        <div>
          <label for="stripe_account_number">Client ID</label>
          <input
            type="password"
            id="stripe_account_number"
            placeholder="VhKTB9a8Hwef5Tsd5"
            v-model="Paypal.paypal_Client_id"
            class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
          />
        </div>
        <div>
          <label for="stripe_account_number">Private Key</label>
          <input
            type="password"
            id="stripe_account_number"
            placeholder="ks8dfJHs85adJHJ89hy"
            v-model="Paypal.paypal_Private_key"
            class="block mb-2 border border-gray-300 w-[100%] outline-none py-1 px-2 rounded-md focus:border-indigo-500"
          />
        </div>
        <!--lock Icon If Checked-->
        <Icon
          name="material-symbols:shield-locked-rounded"
          class="w-16 h-16 text-gray-900 absolute top-6 left-[45%]"
          v-if="Paypal.checked"
        />
      </BlockUI>
    </Fieldset>
    <!-- Fields Cash -->

        <div class="flex justify-start items-center flex-row px-4 gap-4 mt-6">
          <InputSwitch v-model="cashOnDelivery" />
          <h2 class="text-lg font-medium">Cash On Delivery</h2>
        </div>




    <!-- Display Collected Data -->
    <div v-if="submitted" class="mt-4">
      <h2 class="text-xl font-medium">Collected Data</h2>
      <pre>{{ Stripe }}</pre>
      <pre>{{ Paypal }}</pre>
    </div>
  </div>
</template>

<script setup>
const submitted = ref(false);

// Define the form fields object
const Stripe = ref({
  stripe_Public_key: "",
  stripe_Private_key: "",
  checked: false,
});

const Paypal = ref({
  paypal_Client_id: "",
  paypal_Private_key: "",
  checked: false,
});
const cashOnDelivery = ref(true);

// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
