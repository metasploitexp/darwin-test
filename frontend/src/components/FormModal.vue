<template>
    <div class="form-modal">
        <div class="form-modal__label">
            Добавить
        </div>
        <form-row v-for="value, key in dict" :key="key" :label="value" :input-type="key === 'price' ? 'number' : 'text'" v-model="form[key]" />
        <div class="form-modal__buttons">
            <ui-btn text="Отмена" @click="$emit('close')" />
            <ui-btn text="Сохранить" @click="handleSave" />
        </div>
    </div>
</template>

<script>
import FormRow from '@/components/Form/Row.vue';
import UiBtn from '@/components/Ui/Btn.vue';

export default {
    name: 'FormModal',
    components: {
        FormRow,
        UiBtn,
    },
    data() {
        return {
            form: {
                brand: '',
                model: '',
                price: '',
                shop: '',
                phone: '',
            },
            dict: {
                brand: 'Марка',
                model: 'Модель',
                price: 'Цена',
                shop: 'Магазин',
                phone: 'Телефон',
            }
        }
    },
    methods: {
        handleSave() {
            this.$emit('save', this.form)
        }
    }
}
</script>

<style>
.form-modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
    padding: 20px 30px;
    opacity: 1;
    display: flex;
    flex-flow: column;
    gap: 20px;
    width: 400px;
}
.form-modal__label {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.form-modal__buttons {
    display: flex;
    flex-flow: row nowrap;
    gap: 10px;
    justify-content: flex-end;
}
</style>