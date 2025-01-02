<template>
  <div>
    <!-- Header -->
    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row gap-3">
        <h1 class="text-2xl font-medium">Payments</h1>
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

        <MainToggle
          v-model="Stripe.checked"
          label="Stripe"
          label-position="left"
        />


      <div>
        <label for="stripe_account_number">Public Key</label>
        <input
          type="password"
          id="stripe_account_number"
          placeholder="Vh_KT__B9a__8H__wef5T"
          v-model="Stripe.stripe_Public_key"
          :disabled="!Stripe.checked"
        />
      </div>
      <div>
        <label for="stripe_account_number">Private Key</label>
        <input
          type="password"
          id="stripe_account_number"
          placeholder="X_h__2kwa__8H__wefDa"
          v-model="Stripe.stripe_Private_key"
          :disabled="!Stripe.checked"
        />
      </div>
    </form>

    <!-- Fields For Paypal -->
    <form class="mt-4 p-4 pt-0">
      <MainToggle
        v-model="Paypal.checked"
        label="Paypal"
        label-position="left"
      />
      <div>
        <label for="stripe_account_number">Client ID</label>
        <input
          type="password"
          id="stripe_account_number"
          placeholder="VhKTB9a8Hwef5Tsd5"
          v-model="Paypal.paypal_Client_id"
          :disabled="!Paypal.checked"
        />
      </div>
      <div>
        <label for="stripe_account_number">Private Key</label>
        <input
          type="password"
          id="stripe_account_number"
          placeholder="ks8dfJHs85adJHJ89hy"
          v-model="Paypal.paypal_Private_key"
          :disabled="!Paypal.checked"
        />
      </div>
    </form>

    <!-- Fields Cash -->
    <div class="flex justify-start items-center flex-row px-4 gap-4 mt-6">
      <MainToggle v-model="cashOnDelivery" label="Cash On Delivery" />
    </div>

    <!-- Display Collected Data -->
    <div v-if="submitted" class="mt-4">
      <h2 class="text-xl font-medium">Collected Data</h2>
      <p>{{ Stripe }}</p>
      <p>{{ Paypal }}</p>
      <p>{{ cashOnDelivery }}</p>
    </div>
  </div>
</template>

<script setup>
const submitted = ref(false);
const Paypal = ref({
  paypal_Client_id: "",
  paypal_Private_key: "",
  checked: false,
});

// Define the form fields object
const Stripe = ref({
  stripe_Public_key: "",
  stripe_Private_key: "",
  checked: false,
});

const cashOnDelivery = ref(true);

// Function to handle form submission
const handleSubmit = () => {
  submitted.value = true;
};
</script>
