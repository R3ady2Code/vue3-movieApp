<template>
	<div>
		<slot :currentSlide="currentSlide" />



		<div class="absolute z-20 bottom-6 w-full flex justify-center items-center gap-4">
			<span v-for="slide, i in slideCount" :key="i" @click="clickToSpan(slide)"
				class="rounded-full cursor-pointer w-4 h-4"
				:class="[currentSlide === slide ? 'bg-emerald-600' : 'bg-zinc-800']">
			</span>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue'

export default {
	name: 'Slider',
	setup() {
		const currentSlide = ref(1)
		const timeoutDuration = ref(7000)

		const autoPlay = () => {
			setInterval(() => {
				if (currentSlide.value >= 5) {
					currentSlide.value = 1
				} else {
					currentSlide.value++
				}
			}, timeoutDuration.value)
		}

		autoPlay();

		const clickToSpan = (index) => {
			currentSlide.value = index
		}

		return { currentSlide, clickToSpan }
	},
	props: {
		slideCount: Number,
		movieName: String,
	}
}
</script>