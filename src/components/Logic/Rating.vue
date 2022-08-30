<template>
	<div class="rounded-full absolute p-2 -top-2 -left-2 font-semibold"
		:class="[value > 8.5 ? 'bg-emerald-500' : value >= 7.5 ? 'bg-green-400' : value >= 6 ? 'bg-yellow-400' : value >= 5 ? 'bg-orange-500' : 'bg-red-600']">
		{{ value }}</div>
</template>

<script>
export default {
	name: 'Rating',
	props: {
		value: Number
	}
}
</script>
