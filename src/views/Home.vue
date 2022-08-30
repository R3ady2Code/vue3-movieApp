<template>
	<Loader v-if="getLoadingStatus" />

	<div v-else class="py-7 px-40 grid grid-cols-5 gap-y-6 gap-x-8">
		<div class="col-span-full">
			<SearchInput class="transition-all duration-300 ml-auto" :class="[focusOnSearch ? 'w-full' : 'w-[39%]']"
				@onFocus='focusOnSearch = true' @onBlur='focusOnSearch = false' />
		</div>



		<h3 class="font-bold text-2xl text-white">Новинки</h3>
		<div class="col-span-full mb-6">
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

		<h3 class="font-bold text-2xl text-white col-span-full">Бессмертная классика</h3>
		<MovieCard v-for="item, i in classicsMovies" :key="item.kinopoiskId" :data="item"
			:class="`col-start-${i + 1}`" />

		<h3 class="font-bold text-2xl text-white col-span-full">Популярное</h3>
		<MovieCard v-for="item, i in popularMovies" :key="item.kinopoiskId" :data="item"
			:class="`col-start-${i + 1}`" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import SearchInput from '@/components/UI/SearchInput'
import Slider from '@/components/Logic/Slider/Slider';
import SliderItem from '@/components/Logic/Slider/SliderItem';
import MovieCard from '@/components/Logic/MovieCard';
import Loader from '@/components/Logic/Loader';

export default {
	name: "Home",
	components: { SearchInput, Slider, SliderItem, MovieCard, Loader },
	data: () => ({
		focusOnSearch: false,
		newestMovies: [],
		classicsMovies: [],
		popularMovies: []
	}),
	computed: {
		...mapGetters(['getLoadingStatus'])
	},
	methods: {
		onFocusSearch() {
			this.focusOnSearch = true;
		},
	},
	async mounted() {
		this.$store.commit('setLoading', true)
		this.newestMovies = await this.$store.dispatch('getNewestsMovies')
		this.classicsMovies = await this.$store.dispatch('getClassicsMovies')
		this.popularMovies = await this.$store.dispatch('getPopularMovies')
		this.$store.commit('setLoading', false)
	}

}
</script>
