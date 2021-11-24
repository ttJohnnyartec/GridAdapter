Ext.define("CodeViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.CodeViewController",

  edit: function (widgetColumn) {
    const record = widgetColumn.getWidgetRecord();

    this.getViewModel().set("CodeTypeNo", record.get("CodeNo"));
    this.getViewModel().set("editCodeMode", true);

    //CodeGrid
    const CodeStore = this.getViewModel().getStore("CodeGrid");

    CodeStore.removeAll();
    CodeStore.getProxy().setExtraParam("CodeTypeNo", record.get("CodeNo"));
    CodeStore.load({
      callback: function (records, operation, success) {
        if (!success) {
          var error = operation.getError();
          Ext.Msg.alert("Error", `Search Fail !! Reason : ${error}`);
          //gridMask.hide();
          //searchFormMask.hide();
        }
      },
    });
  },

  update: function (btn) {
    const store = this.getViewModel().getStore("CodeGrid");
    const updateData = store
      .getData()
      .items.filter((item) => item.data.IsUpdate);
    //const postData = updateData.map(item => item.data);

    if (updateData.length == 0) {
      Ext.Msg.alert("Message", "You have to select a data to update!! ");
      return;
    }

    if (updateData.every((item) => item.isValid())) {
      try {
        store.sync({
          success: function (batch, options) {
            Ext.Msg.alert("Message", "Update Code Success!!");
          },
          failure: function (batch, options) {
            const response = Ext.decode(
              batch.exceptions[0].getResponse()?.responseText
            );
            Ext.Msg.alert(
              "Message",
              `Update Code fail!! Reason : ${response.ErrorMessage.Message}`
            );
          },
          callback: function (batch, options) {
            store.reload();
          },
        });
      } catch (error) {
        Ext.Msg.alert("Message", `Update Code Fail!! Reason : ${error}`);
      }
    } else {
      alert("Invalid Record!!");
    }
  },

  add: function () {
    const store = this.getViewModel().getStore("CodeGrid");
    const model = new Ext.create("CodeModel");
    model.data.CodeTypeNo = this.getViewModel().data.CodeTypeNo;
    store.add(model);
  },

  checkChange: function (gridColumn, rowIndex, checked, record, event, eOpts) {
    record.set("IsUpdate", true);
  },

  gridChange: function (editor, e, eOpts) {
    if (e.originalValue != e.value) {
      e.record.set("IsUpdate", true);
    }
  },

  delete: function (view, recIndex, cellIndex, item, e, record) {
    record.drop();
    view.refresh();
  },

  cancel: function () {
    window.location.href = "../Code/Index";
  },

  addCodeType: function () {
    const CodeTypeWindow = Ext.ComponentQuery.query("CodeTypeWindow")[0];
    CodeTypeWindow.show();
  },

  createCodeType: function (btn) {
    const form = btn.up("form").getForm();
    const store = this.getViewModel().getStore("CodeTypeGrid");
    const CodeTypeWindow = Ext.ComponentQuery.query("CodeTypeWindow")[0];

    try {
      if (form.isValid()) {
        const formValues = form.getValues();
        const model = new Ext.create("CodeModel");
        model.data.CodeTypeNo = "01";
        model.data.CodeNo = formValues.CodeNo;
        model.data.CodeName = formValues.CodeName;
        model.data.IsDisabled = false;

        store.add(model);
        store.sync({
          success: function (batch, options) {
            Ext.Msg.alert("Message", "Update CodeType Success!!");
          },
          failure: function (batch, options) {
            var error = options.getError();
            Ext.Msg.alert(
              "Message",
              `Update CodeType fail!! Reason : ${error}`
            );
          },
          callback: function (batch, options) {
            store.reload();
            form.reset();
            CodeTypeWindow.hide();
          },
        });
      } else {
        Ext.Msg.alert("Error", "Invalid Form!!");
      }
    } catch (Exception) {
      Ext.Msg.alert("Error", `Update CodeType Fail !! Reason : ${Exception}`);
    }
  },
});
