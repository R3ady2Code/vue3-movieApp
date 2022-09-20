<template>
	<h3 class="text-lg mb-6">Всего найденно - {{movies.total}}</h3>
	<div class="grid grid-cols-5 gap-3">
		<MovieCard class="self-end" v-for="item in movies.items" :key='item.kinopoiskId' :data='item' />
	</div>
	<div class="flex w-full my-8">
		<div class="flex mx-auto">
			<p class="text-xl p-2"
				:class="[selectedPage === i+1 ? 'text-emerald-700' : 'text-white cursor-pointer hover:bg-zinc-900']"
				v-for="number, i in [...Array(Math.ceil(movies.total/20))]" :key="i">
				{{i+1}}
			</p>
		</div>
	</div>

</template>

<script>
import MovieCard from '@/components/Logic/MovieCard';

export default {
	name: 'SearchModeHome',
	components: {
		MovieCard
	},
	props: {
		movies: Array
	},
	data: () => ({
		selectedPage: 1
	})
}
</script>

<style>

</style>