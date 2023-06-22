<template>
  <div class="long-button">
    <button @click="onClick()" :style="{ background: color }">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Lorum Ipsum",
    },
    color: String,
  },
  methods: {
    onClick() {
      this.$emit("toggle-add-task");
    },
  },
};
</script>

<style>
.long-button {
  width: 90px;
}
</style>
