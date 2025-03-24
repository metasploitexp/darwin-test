<template>
    <div class="ui-overlay">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'UiOverlay',
}
</script>

<style>
.ui-overlay {
    background-color: rgba(0, 0, 0, .4);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
</style>