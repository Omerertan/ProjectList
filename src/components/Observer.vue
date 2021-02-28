<template>
  <div class="observer"></div>
</template>
<script>
export default {
  name: "observer",
  data() {
    return {
      observer: null,
    };
  },
  // It allows us to check whether some or all of the element we want exists.
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    });
    this.observer.observe(this.$el);
  },
};
</script>
<style scoped></style>
