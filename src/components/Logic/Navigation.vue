<template>
	<nav class="fixed duration-300 z-10 w-12 hover:w-[14rem] flex flex-col justify-center h-screen bg-zinc-800 shadow-3xl"
		@mouseover="isMouseOnNavigation = true" @mouseleave="isMouseOnNavigation = false">
		<router-link v-for="li in links" :key="li.key" :to="li.key" @click="select = li.key"
			class="grid grid-cols-[auto_auto] duration-200 justify-start items-center hover:bg-zinc-700"
			:class="{ 'bg-zinc-900 border-l-4 border-emerald-600 hover:bg-zinc-900': select === li.key }">
			<div class="px-2 py-4">
				<img :src="getImgUrl(li.icon)" :alt="li.icon" class="w-8 min-w-[32px]">
			</div>
			<transition name="nav">
				<p v-if="isMouseOnNavigation" class="pl-2 pr-6 whitespace-nowrap text-white transition-all">{{ li.name
				}}
				</p>
			</transition>
		</router-link>
	</nav>
</template>

<script>
export default {
	name: 'Navigation',
	data: () => ({
		isMouseOnNavigation: false,
		links: [
			{ name: 'Главная', key: '/', icon: 'homeIcon.svg' },
			{ name: 'Смотреть позже', key: '/watch-later', icon: 'eyeIcon.svg' },
			{ name: 'Избранное', key: '/favorites', icon: 'starIcon.svg' },
			{ name: 'Специально для вас', key: '/special', icon: 'heartIcon.svg' },
		],
		width: 'fit-content',
		select: '/'
	}),
	methods: {
		getImgUrl(pic) {
			return require('../../assets/' + pic)
		}
	}
}
</script>

<style>
.nav-enter-from,
.nav-leave-to {
	transform: translateX(-15px);
	opacity: 0;
}
</style>