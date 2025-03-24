<template>
    <div class="table-card">
        <table>
            <thead>
                <tr>
                    <th v-for="field in fields" :key="field.key">
                        {{ field.label }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <table-row v-for="item, index in items" :key="index" :item="item" :checked-row="checkedRow" :is-checked="highlight.includes(item.id)" @checked="handleChecked" />
            </tbody>
        </table>
    </div>
</template>

<script>
import TableRow from '@/components/Table/Row.vue';

export default {
    name: 'TableCard',
    props: ['items'],
    components: {
        TableRow,
    },
    data() {
        return {
            fields: [
                {
                    key: 'id',
                    label: 'ID',
                },
                {
                    key: 'brand',
                    label: 'Марка',
                },
                {
                    key: 'model',
                    label: 'Модель',
                },
                {
                    key: 'price',
                    label: 'Цена',
                },
                {
                    key: 'name',
                    label: 'Магазин',
                },
                {
                    key: 'phone',
                    label: 'Телефон',
                },
            ],
            highlight: [],
            checkedRow: 0,
        }
    },
    methods: {
        //Определение какую строку нужно подсвечивать
        handleChecked(data) {
            this.highlight = [];
            this.checkedRow = data.item.id;

            if (!data.checked) {
                return;
            }
            this.items.forEach(item => {
                if ((item.brand === data.item.brand) && (item.model === data.item.model)) {
                    this.highlight.push(item.id);
                }
            });
        },
    }
}
</script>

<style>
table, th, td {
  border: 1px solid #000;
  border-collapse: collapse;
  padding: 10px 15px;
  font-size: 18px;
  transition: all .15s ease-in;
}
</style>