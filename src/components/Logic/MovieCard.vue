<template>
	<div class="flex flex-col gap-2 cursor-pointer relative" @mouseleave="onMouseLeave" @mouseover="onMouseOver">
		<img height='60px' :src='data.posterUrl' :alt="data.nameRu">
		<figcaption>
			<h4 class="text-white font-medium text-lg truncate">{{ data.nameRu }}</h4>
			<h5 class="text-zinc-900 italic text-base">{{ data.genres[0].genre }}, {{ data.year }}</h5>
		</figcaption>
		<transition name="rating">
			<Rating :value='data.rating' v-if='mouseOnCard && data.rating' />
		</transition>
	</div>
</template>

<script>
import Rating from './Rating';

export default {
	name: 'MovieCard',
	props: {
		data: Object
	},
	components: { Rating },
	data: () => ({
		mouseOnCard: false
	}),
	methods: {
		onMouseOver() {
			this.mouseOnCard = true;
		},
		onMouseLeave() {
			this.mouseOnCard = false;
		}
	}
}
</script>

<style>
.rating-enter-active,
.rating-leave-active {
	transition: opacity 0.1s ease;
}

.rating-enter-from,
.rating-leave-to {
	opacity: 0;
}
</style>
