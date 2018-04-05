<template>
  <div>
    <x-header />
    <nuxt/>
    <x-footer />
  </div>
</template>

<script>
import XHeader from "~/components/XHeader.vue";
import XFooter from "~/components/XFooter.vue";

export default {
	components: {
		XHeader,
		XFooter
	}
};
</script>

<style>
</style>
