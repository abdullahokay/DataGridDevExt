<script setup>
import Toolbar from './components/Toolbar.vue';
import DataGrid from './components/DataGrid.vue';
</script>

<template>
  <header class="header-component">
    <div class="toolbar-container">
      <Toolbar />
    </div>
  </header>
  <main>
    <DataGrid />
  </main>
</template>
<style scoped>
.toolbar-container {
  margin-bottom: 50px;
}

</style>
