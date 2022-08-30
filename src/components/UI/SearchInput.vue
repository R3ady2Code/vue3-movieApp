<template>
	<div class="p-2 text-lg rounded bg-zinc-800 text-white flex items-start gap-2">
		<img src="../../assets/search.svg" alt="search" class="w-6">
		<input type="text" class="w-full transition-all bg-zinc-800 focus:outline-0" @focus="$emit('onFocus')"
			@blur="$emit('onBlur')" placeholder="Поиск кино...">
	</div>
</template>

<script>
export default {
	name: "SearchInput",
}
</script>