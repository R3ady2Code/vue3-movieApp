<template>
	<div class="grid grid-cols-5 gap-6">
		<h3 class="font-bold col-span-ful text-2xl text-white">Новинки</h3>
		<div class="mb-6 col-start-1 col-span-full">
			<Slider class="max-h-[55vh] h-[55vh]  relative" v-slot="{ currentSlide }" :slideCount="newestMovies.length">
				<SliderItem v-for="item, i in newestMovies" :key="item.kinopoiskId">
					<div v-show="currentSlide === i + 1" class="absolute top-0 left-0 w-full max-h-full h-full flex">
						<img class="min-w-full h-full object-cover" :src='item.posterUrl' :alt="item.nameRu">
						<h3
							class="text-white absolute bottom-4 right-2 text-xl font-semibold drop-shadow-2xl max-w-[30%] text-right">
							{{ item.nameRu }} ({{ item.countries[0].country }})
						</h3>
					</div>
				</SliderItem>
			</Slider>
		</div>

		<h3 class="font-bold text-2xl col-span-full text-white">Бессмертная классика</h3>
		<MovieCard v-for="item, i in classicsMovies" :key="item.kinopoiskId" :data="item"
			:class="`col-start-${i + 1}`" />


		<h3 class="font-bold text-2xl text-white col-span-full">Популярное</h3>
		<MovieCard v-for="item, i in popularMovies" :key="item.kinopoiskId" :data="item"
			:class="`col-start-${i + 1}`" />

	</div>
</template>

<script>
import Slider from '@/components/Logic/Slider/Slider';
import SliderItem from '@/components/Logic/Slider/SliderItem';
import MovieCard from '@/components/Logic/MovieCard';

export default {
	name: 'DefaultHome',
	components: { Slider, SliderItem, MovieCard },
	props: {
		newestMovies: Array,
		classicsMovies: Array,
		popularMovies: Array
	},

}
</script>

<style>

</style>