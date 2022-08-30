<template>
	<div class="flex flex-col gap-2 cursor-pointer relative">
		<img :src='data.posterUrl' :alt="data.nameRu">
		<figcaption>
			<h4 class="text-white font-medium text-lg truncate">{{ data.nameRu }}</h4>
			<h5 class="text-zinc-900 italic text-base">{{ data.genres[0].genre }}, {{ data.year }}</h5>
		</figcaption>
		<Rating :value='data.rating' />
	</div>
</template>

<script>
import Rating from './Rating';

export default {
	name: 'MovieCard',
	props: {
		data: Object
	},
	components: { Rating }
}
</script>
