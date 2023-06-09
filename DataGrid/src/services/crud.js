import DataSource from 'devextreme/data/data_source';
import LocalStore from 'devextreme/data/local_store';
import data from './data'

var storageData = JSON.parse(localStorage.getItem("dx-data-localStore-socials"));

const dataSource = new DataSource({
  store: new LocalStore({
    key: 'ID',
    data: storageData,
    name: 'socials',
    immediate: true
  })
})

const handleEditingStart = (e) => {
  const addedRow = e.data;
  var index = data.indexOf(e.data);
  e.data.id = index + 1;
  this.socials.push(addedRow)
  console.log(this.socials);
  localStorage.setItem("socials", JSON.stringify(this.socials));
  var socialss = JSON.parse(localStorage.getItem("socials"));
  console.log(socialss);
}

export default {
  handleEditingStart() {
    return handleEditingStart(e)
  },

  getDataSource() {
    return dataSource
  },
};
