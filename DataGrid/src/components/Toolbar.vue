<template>
    <DxToolbar class="header-toolbar">
        <DxItem locateInMenu="never" location="before">
            <img src="../assets/rast-logo.png" alt="" />
        </DxItem>
        <DxItem locateInMenu="auto" location="center">
            <div class="toolbar-label">Hakkımızda</div>
        </DxItem>
        <DxItem locateInMenu="auto" location="center">
            <div class="toolbar-label">Jüri - Yarışma Yazılımı</div>
        </DxItem>
        <DxItem locateInMenu="auto" location="center">
            <div class="toolbar-label">Word Ninja</div>
        </DxItem>
        <DxItem locateInMenu="auto" location="center">
            <div class="toolbar-label">Word Pyramids</div>
        </DxItem>
        <DxItem class="icon" locateInMenu="never" location="after">
            <img class="icon" src="../assets/youtube.png" alt="" />
        </DxItem>
        <DxItem class="icon" locateInMenu="never" location="after">
            <img class="icon" src="../assets/instagram.png" alt="" />
        </DxItem>
        <DxItem class="icon" locateInMenu="never" location="after">
            <img class="icon" src="../assets/behance.png" alt="" />
        </DxItem>
        <DxItem class="icon" locateInMenu="never" location="after">
            <img class="icon" src="../assets/linkedin.png" alt="" />
        </DxItem>
    </DxToolbar>
</template>

<script>
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';
import 'devextreme/ui/text_box';

export default {
    components: {
        DxToolbar,
        DxItem
    },
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .dx-widget {
        font-size: 18px;
        line-height: 21px;
        font-family: 'Poppins', sans-serif;
    }

    @media screen and (min-width: 60rem) {
        .toolbar-label {
            padding: 0 35px 0 0;
        }

        .icon {
            padding: 0 10px 0 0;
        }
    }

    @media screen and (min-width: 600px) and (max-width: 60rem) {
        .toolbar-label {
            padding: 0 20px 0 0;
        }
    }

</style>