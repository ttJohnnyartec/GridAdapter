Ext.define("CodeTypeStore", {
  extend: "Ext.data.Store",
  alias: "store.CodeTypeStore",
  model: "CodeModel",
  proxy: {
    type: "ajax",
    //url: 'Search',
    api: {
      create: "Insert",
      read: "Search",
      //update: 'Update',
      //destroy: 'Delete'
    },
    extraParams: {
      CodeTypeNo: "01",
    },
    paramsAsJson: true,
    actionMethods: {
      create: "POST",
      read: "POST",
      update: "POST",
      destroy: "POST",
    },
    noCache: false,
    writer: {
      type: "json",
      writeAllFields: true,
      allowSingle: false,
      rootProperty: "data",
    },
    reader: {
      type: "json",
      rootProperty: function (result) {
        return result.data;
      },
      totalProperty: function (result) {
        return result.total;
      },
      successProperty: function (result) {
        return result.success;
      },
      messageProperty: function (result) {
        return result.ErrorMessage.Message;
      },
    },
  },
  listeners: {
    beforeload: function (store, operation, eOpts) {
      //gridMask.show();
      //searchFormMask.show();
    },
    datachanged: function (store, eOpts) {
      //gridMask.hide();
      //searchFormMask.hide();
    },
  },
});

Ext.define("CodeStore", {
  extend: "Ext.data.Store",
  alias: "store.CodeStore",
  model: "CodeModel",
  pageSize: 50,
  proxy: {
    type: "ajax",
    //url: 'Search',
    api: {
      create: "Insert",
      read: "Search",
      update: "Update",
      destroy: "Delete",
    },
    paramsAsJson: true,
    actionMethods: {
      create: "POST",
      read: "POST",
      update: "POST",
      destroy: "POST",
    },
    noCache: false,
    writer: {
      type: "json",
      writeAllFields: true,
      allowSingle: false,
      rootProperty: "data",
    },
    reader: {
      type: "json",
      rootProperty: function (result) {
        //if (result.data.length == 0) {
        //    Ext.Msg.alert('Message', `No data!!`);
        //}
        return result.data;
      },
      totalProperty: function (result) {
        return result.total;
      },
      successProperty: function (result) {
        return result.success;
      },
      messageProperty: function (result) {
        return result.ErrorMessage.Message;
      },
    },
  },
  listeners: {
    beforeload: function (store, operation, eOpts) {
      //gridMask.show();
      //searchFormMask.show();
    },
    datachanged: function (store, eOpts) {
      //gridMask.hide();
      //searchFormMask.hide();
    },
  },
});
