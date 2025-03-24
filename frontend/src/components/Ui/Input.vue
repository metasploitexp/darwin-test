<template>
    <div class="ui-input">
        <input v-model="currentValue" :type="inputType" :min="inputType === 'number' ? 0 : ''" />
    </div>
</template>

<script>
export default {
    name: 'UiInput',
    props: ['value', 'inputType'],
    computed: {
        currentValue: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit('update', value);
            }
        }
    }
}
</script>

<style>
.ui-input input {
    all: unset;
    width: 100%;
    border: 1px solid #000;
    padding: 5px 15px;
    box-sizing: border-box;
    border-radius: 5px;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>