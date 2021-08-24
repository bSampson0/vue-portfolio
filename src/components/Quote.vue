<template>
  <div class="quote text-center pt-10 pb-10">
    {{ quote }}
    <br />
    <span class="ml-auto" style="font-size: 0.5em">- {{ author }}</span>
  </div>
</template>

<script>
export default {
  props: {
    quote: String,
    author: String,
  },
};
</script>

<style lang="scss" scoped>
.quote {
  font-size: 2em;
  font-style: italic;
}
</style>
