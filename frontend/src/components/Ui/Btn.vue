<template>
    <div class="ui-btn">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: 'UiBtn',
    props: ['text'],
}
</script>

<style>
.ui-btn {
    border-radius: 5px;
    border: 2px solid #141414;
    padding: 10px 15px;
    cursor: pointer;
    user-select: none;
    transition: all .25s ease-in;
    font-size: 20px;
    width: fit-content;
}
.ui-btn:hover {
    background-color: #141414;
    color: #fff;
    transition: all .15s ease-in;
}
</style>