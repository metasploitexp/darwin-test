<template>
    <div class="ui-checkbox">
        <input type="checkbox" v-model="currentValue" />
    </div>
</template>

<script>
export default {
    name: 'UiCheckbox',
    props: ['value'],
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('checked', value);
            }
        }
    }
}
</script>

<style>
.ui-checkbox input {
    accent-color: #141414;
}
</style>