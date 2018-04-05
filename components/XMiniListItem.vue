<template>
	<div>
    <hr class="separador" :style="{'background-color': `${color}`}" />
    <div style="color: white">
      <h5 v-for="(item, index) in items" :key="index" :style="{'color': `${color}`, 'opacity': '0.6'}">{{item}}</h5>
    </div>
  </div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			required: true
		},
		color: {
			type: String,
			required: true
		}
	}
};
</script>
