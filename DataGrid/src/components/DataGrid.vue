<template>
    <div class="data-grid-container">
        <DxDataGrid :data-source="employees" key-expr="ID" :show-column-lines="showColumnLines"
            :show-filter-row="showFilterRow" :show-row-lines="showRowLines" :show-borders="showBorders"
            :row-alternation-enabled="rowAlternationEnabled">
            <DxSearchPanel :visible="true" :width="240" placeholder="Search..." />
            <DxEditing :allow-updating="false" :allow-adding="true" :allow-deleting="false" mode="form" />
            <!-- <DxSearchPanel :visible="true" :width="240" placeholder="Search..." /> -->
            <DxColumn :width="80" data-field="Prefix" caption="Title" />
            <DxColumn data-field="FirstName" />
            <DxColumn data-field="LastName" />
            <DxColumn data-field="City" />
            <DxColumn data-field="State" />
            <DxColumn :width="130" data-field="Position" />
            <DxColumn :width="100" data-field="BirthDate" data-type="date" />
            <DxColumn :width="100" data-field="HireDate" data-type="date" />
            <DxToolbar>
                <DxItem name="searchPanel" location="before" />
                <DxItem name="addRowButton" show-text="always" location="after" />
            </DxToolbar>
        </DxDataGrid>
    </div>
</template>

<script>
// import , {  } from 'devextreme-vue/toolbar';
import {
    DxDataGrid,
    DxColumn,
    DxToolbar,
    DxItem,
    DxSearchPanel,
    DxEditing
} from 'devextreme-vue/data-grid';
import service from '../services/data';

export default {
    components: {
        DxDataGrid,
        DxColumn,
        DxToolbar,
        DxItem,
        DxSearchPanel,
        DxEditing
    },
    data() {
        return {
            employees: service.getEmployees(),
            showColumnLines: true,
            showRowLines: true,
            showBorders: true,
            rowAlternationEnabled: true,
            showFilterRow: true,
        };
    },
};
</script>

<style>
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