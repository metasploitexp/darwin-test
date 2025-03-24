<template>
    <div class="form-row">
        <div class="form-row__label">
            {{ label }}
        </div>
        <div class="form-row__value">
            <ui-input :value="value" @update="handleInput" :input-type="inputType" />
        </div>
    </div>
</template>

<script>
import UiInput from '@/components/Ui/Input.vue';

export default {
    name: 'FormRow',
    props: ['label', 'value', 'inputType'],
    components: {
        UiInput,
    },
    methods: {
        handleInput(value) {
            this.$emit('update:model-value', value);
        }
    }
}
</script>

<style>
.form-row {
    display: flex;
    flex-flow: column;
    gap: 5px;
    width: 100%;
    font-size: 18px;
}
</style>