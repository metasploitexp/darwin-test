<template>
    <tr>
        <td v-for="value, key in item" :key="key" :class="{'highlight': isChecked && key === 'price'}">
            {{ value }}
        </td>
        <td>
            <ui-checkbox input-type="checkbox" :value="checkedRow === item.id" @checked="$emit('checked', {'item': item, 'checked': $event})" />
        </td>
    </tr>
</template>

<script>
import UiCheckbox from '@/components/Ui/Checkbox.vue';

export default {
    name: 'TableRow',
    props: ['item', 'isChecked', 'checkedRow'],
    components: {
        UiCheckbox,
    },
}
</script>

<style>
.highlight {
    background-color: rgb(247, 186, 72);
    transition: all .15s ease-in;
}
</style>