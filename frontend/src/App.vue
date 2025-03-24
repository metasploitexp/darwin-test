<template>
    <div class="main">
        <ui-btn text="Добавить" @click="showOverlay = true" />
        <table-card :items="items" />
        <ui-overlay v-if="showOverlay">
            <form-modal @close="showOverlay = false" @save="handleSave" />
        </ui-overlay>
    </div>
</template>

<script>
import TableCard from '@/components/TableCard.vue';
import UiBtn from '@/components/Ui/Btn.vue';
import UiOverlay from '@/components/Ui/Overlay.vue';
import FormModal from '@/components/FormModal.vue';

export default {
    name: 'App',
    components: {
        TableCard,
        UiBtn,
        UiOverlay,
        FormModal,
    },
    data() {
        return {
            items: [],
            showOverlay: false,
        }
    },
    methods: {
        //Запрос на получение данных таблицы
        async fetchData() {
            try {
            const response = await this.$axios.get('/cars/get-all');

            if (response.status === 200) {
                this.items = response.data;
            }
            } catch (error) {
                console.log(error);
            }
        },
        //Запрос на сохранение данных в таблицы, аргкментом принимает фопму с полями (brand, model, price, shop, phone)
        async handleSave(form) {
            try {
                const response = await this.$axios.post('/cars/create', {...form});
                
                if (response.status === 200) {
                    this.showOverlay = false;
                    const itemLength = this.items.length + 1;
                    this.items.push({id: itemLength, ...response.data});
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.fetchData();
    }
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
    margin: 20px;
    gap: 10px;
}
</style>
