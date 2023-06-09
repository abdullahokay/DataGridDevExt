import DataSource from 'devextreme/data/data_source';
import LocalStore from 'devextreme/data/local_store';

//data grid için local storage' da hali hazırda (varsa) var olan veriler alındı
var storageData = JSON.parse(localStorage.getItem("dx-data-localStore-socials"));

//data grid için local storage' da alan ayırıldı ve data gridin data source' u storageData değişkeni olarak belirlendi
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
