Ext.define("CodeViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.CodeViewModel",
  stores: {
    CodeTypeGrid: {
      type: "CodeTypeStore", //Store reference ==Store的属性 alias: 'store.orderStore',
      autoLoad: true,
    },
    CodeGrid: {
      type: "CodeStore", //Store reference ==Store的属性 alias: 'store.orderStore',
      autoLoad: false,
    },
  },
  data: {
    CodeTypeNo: null,
    editCodeMode: false,
  },
});
