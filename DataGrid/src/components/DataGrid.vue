<template>
    <div class="data-grid-container">
        <DxDataGrid id="data-grid" :data-source="socials" :show-column-lines="showColumnLines"
            :show-filter-row="showFilterRow" :show-row-lines="showRowLines" :show-borders="showBorders"
            :row-alternation-enabled="rowAlternationEnabled">
            <DxScrolling row-rendering-mode="virtual" />
            <DxPaging :page-size="10" />
            <DxPager :visible="true" :allowed-page-sizes="pageSizes" :display-mode="displayMode"
                :show-page-size-selector="showPageSizeSelector" :show-info="showInfo"
                :show-navigation-buttons="showNavButtons" />
            <DxSearchPanel class="search-bar" :visible="true" placeholder="Search..." />
            <DxEditing :allow-updating="false" :allow-adding="true" :allow-deleting="false" mode="popup">
                <DxTexts mode="row" :allow-adding="true" addRow="Yeni Hesap Ekle"></DxTexts>
                <DxPopup :show-title="true" :width="490" :height="340" title="Yeni Hesap Bilgileri" />
                <DxForm>
                    <DxItem :col-count="1" :col-span="2" item-type="group">
                        <DxItem data-field="SocialLink" caption="Sosyal Medya Linki" />
                    </DxItem>
                    <DxEmptyItem :col-span="2" />
                    <DxItem :col-count="1" :col-span="2" item-type="group">
                        <DxItem data-field="Social" caption="Sosyal Medya Adı" />
                    </DxItem>
                    <DxEmptyItem :col-span="2" />
                    <DxItem :col-count="1" :col-span="2" item-type="group">
                        <DxItem data-field="Description" caption="Açıklama" />
                    </DxItem>
                </DxForm>
            </DxEditing>
            <DxColumn data-field="SocialLink" caption="Sosyal Medya Linki" />
            <DxColumn data-field="Social" caption="Sosyal Medya Adı" />
            <DxColumn data-field="Description" caption="Açıklama" />
            <DxToolbar>
                <DxItem name="searchPanel" location="before" />
                <DxItem name="addRowButton" show-text="always" location="after" />
            </DxToolbar>
        </DxDataGrid>
    </div>
</template>

<script>
import {
    DxDataGrid,
    DxColumn,
    DxToolbar,
    DxItem,
    DxSearchPanel,
    DxEditing,
    DxTexts,
    DxPopup,
    DxForm,
    DxPaging,
    DxPager,
    DxScrolling,
} from 'devextreme-vue/data-grid';
import { DxEmptyItem } from 'devextreme-vue/form';
import crudService from '../services/crud'

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxToolbar,
        DxItem,
        DxSearchPanel,
        DxEditing,
        DxTexts,
        DxPopup,
        DxForm,
        DxEmptyItem,
        DxPaging,
        DxPager,
        DxScrolling,
    },
    data() {
        return {
            socials: crudService.getDataSource(),
            showColumnLines: true,
            showRowLines: true,
            showBorders: true,
            rowAlternationEnabled: true,
            showFilterRow: true,
            pageSizes: [5, 10, 'all'],
            showPageSizeSelector: true,
            showInfo: false,
            showNavButtons: true,
            displayMode: ''
        };
    },
};
</script>

<style>
.dx-datagrid .dx-sort-up {
    color: #744BFC;
    font-size: 20px;
}

.dx-datagrid .dx-sort-down {
    font-size: 20px;
}

.dx-button-mode-contained .dx-icon {
    color: white;
}

.dx-button-mode-contained.dx-state-hover {
    background-color: #744BFC;
    filter: brightness(0.90);
}

.dx-button-mode-contained.dx-state-active {
    background-color: #744BFC;
    color: white;
    filter: brightness(0.70);
}

.dx-searchbox .dx-icon-search {
    border-radius: 39px 0 0 39px;
    background-color: #744BFC;
    color: white;
}

.dx-button {
    border-radius: 39px;
}

.dx-button-mode-contained {
    background-color: #744BFC;
    color: white;
}

.dx-datagrid-addrow-button .dx-icon-edit-button-addrow {
    color: white;
}

.dx-searchbox .dx-icon-search::before {
    color: white;
}

.dx-placeholder {
    margin-left: 10px;
}

.dx-texteditor.dx-editor-outlined {
    border-radius: 39px;
}

@media screen and (min-width: 60rem) {
    .dx-texteditor.dx-editor-outlined.dx-searchbox {
        width: 380px !important;
    }
}

#data-grid .dx-row {
    height: 66px;
}

.dx-datagrid-content .dx-datagrid-table .dx-row>td {
    vertical-align: middle;
}

.dx-datagrid .dx-row-alt>td {
    background-color: #F1F4FF;
}

.data-grid-container {
    background-color: #F2F5FF;
}

.dx-datagrid-search-panel {
    margin: 0;
}
</style>