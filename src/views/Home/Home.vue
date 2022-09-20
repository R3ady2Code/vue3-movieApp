<template>

	<div class="py-7 px-40">

		<SearchInput v-model="searchValue" class="transition-all duration-300 ml-auto mb-6"
			:class="{'w-full': focusOnSearch, 'w-[40%]': !focusOnSearch && !isSearchMode}"
			@onFocus='focusOnSearch = true' @onBlur='focusOnSearch = false' />

		<Loader v-if="getLoadingStatus" />

		<Default v-else-if="!isSearchMode" :newestMovies="newestMovies" :classicsMovies="classicsMovies"
			:popularMovies="popularMovies" />

		<SearchMode v-else-if='isSearchMode' :movies='searchMovies' />

	</div>

</template>

<script>
import { mapGetters } from 'vuex';

import SearchInput from '@/components/UI/SearchInput'
import Loader from '@/components/Logic/Loader';
import Default from './Default';
import SearchMode from './SearchMode';

export default {
	name: "Home",
	components: { SearchInput, Loader, Default, SearchMode },
	data: () => ({
		focusOnSearch: false,
		isSearchMode: false,
		newestMovies: [],
		classicsMovies: [],
		popularMovies: [],
		searchMovies: {},
		searchValue: ''
	}),
	watch: {
		searchValue: {
			async handler(value) {
				if (value.length > 2) {
					this.isSearchMode = true
					this.$store.commit('setLoading', true)
					this.searchMovies = await this.$store.dispatch('getSearchMovies', { keyword: value })
					this.$store.commit('setLoading', false)
				} else {
					this.isSearchMode = false
				}
			},
			deep: true
		},
	},
	computed: {
		...mapGetters(['getLoadingStatus'])
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
