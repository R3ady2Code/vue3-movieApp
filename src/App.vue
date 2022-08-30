<template>
  <Navigation />
  <router-view />
</template>

<script>
import Navigation from './components/Logic/Navigation';

export default {
  components: { Navigation }
}
</script>
