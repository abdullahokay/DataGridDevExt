import DataSource from 'devextreme/data/data_source';
import LocalStore from 'devextreme/data/local_store';

var storageData = JSON.parse(localStorage.getItem("dx-data-localStore-socials"));

const dataSource = new DataSource({
  store: new LocalStore({
    key: 'ID',
    data: storageData,
    name: 'socials',
    immediate: true
  })
})

export default {
  getDataSource() {
    return dataSource
  },
};
