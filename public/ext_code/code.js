Ext.Loader.setConfig({ enabled: true });
Ext.require(["Ext.form.Panel", "Ext.tip.QuickTipManager"]);

Ext.onReady(function () {
  //=====================Grid=====================
  Ext.define("CodeTypeGrid", {
    extend: "Ext.grid.Panel",
    xtype: "CodeTypeGrid",
    viewConfig: {
      enableTextSelection: true,
    },
    bind: {
      store: "{CodeTypeGrid}",
      hidden: "{editCodeMode}",
    },
    title: "Search Result",
    columns: [
      { xtype: "rownumberer", width: 30, align: "center" },
      {
        header: "CodeType",
        dataIndex: "CodeName",
        flex: 1,
        sortable: false,
        menuDisabled: true,
        width: 200,
        minWidth: 150,
        maxWidth: 250,
      },
      {
        header: "CodeNo",
        dataIndex: "CodeNo",
        sortable: false,
        menuDisabled: true,
        width: 80,
        minWidth: 80,
      },
      {
        header: "Edit",
        sortable: false,
        autoSizeColumn: true,
        menuDisabled: true,
        align: "center",
        xtype: "widgetcolumn",
        width: 80,
        widget: {
          xtype: "button",
          text: "Edit",
          handler: "edit",
        },
        //onWidgetAttach: function (column, widget, record) {
        //    //widget.setVisible(record.get('isActivated') == true);
        //},
      },
    ],
    dockedItems: [
      {
        xtype: "toolbar",
        dock: "bottom",
        layout: {
          pack: "center",
        },
        ui: "footer",
        fixed: true,
        displayInfo: true,
        items: [
          {
            xtype: "button",
            text: "Add",
            handler: "addCodeType",
          },
        ],
      },
    ],
    selType: "cellmodel",
    layout: "fit",
    height: 600,
    width: 350,
    //forceFit: true,
    //autofit: true,
    //autoDestroy: true,
    //renderTo: 'CodeSearchList',
  });

  //=====================CodeGrid=====================
  Ext.define("CodeGrid", {
    extend: "Ext.grid.Panel",
    xtype: "CodeGrid",
    viewConfig: {
      enableTextSelection: true,
    },
    bind: {
      store: "{CodeGrid}",
      hidden: "{!editCodeMode}",
    },
    title: "Search Result",
    columns: [
      {
        header: "CodeTypeNo",
        dataIndex: "CodeTypeNo",
        //editor: {
        //    xtype: 'textfield',
        //    allowBlank: false,  //禁止空白
        //    maxLength: 50,
        //},
        sortable: false,
        autoSizeColumn: true,
        menuDisabled: true,
        minWidth: 120,
        width: 120,
      },
      {
        header: "Code Name",
        dataIndex: "CodeName",
        editor: {
          xtype: "textfield",
          allowBlank: false, //禁止空白
          maxLength: 50,
        },
        sortable: false,
        autoSizeColumn: true,
        menuDisabled: true,
        minWidth: 120,
        width: 120,
      },
      {
        header: "CodeNo",
        dataIndex: "CodeNo",
        editor: {
          xtype: "textfield",
          allowBlank: false, //禁止空白
          maxLength: 50,
        },
        sortable: false,
        autoSizeColumn: true,
        menuDisabled: true,
        minWidth: 80,
        width: 80,
      },
      {
        header: "Disabled",
        xtype: "checkcolumn",
        dataIndex: "IsDisabled",
        listeners: {
          checkchange: "checkChange",
        },
        sortable: false,
        autoSizeColumn: true,
        menuDisabled: true,
        minWidth: 80,
        width: 80,
      },
      {
        header: "UPD",
        xtype: "checkcolumn",
        dataIndex: "IsUpdate",
        sortable: false,
        autoSizeColumn: true,
        menuDisabled: true,
        minWidth: 50,
        width: 60,
      },
      {
        xtype: "actioncolumn",
        width: 30,
        sortable: false,
        align: "center",
        menuDisabled: true,
        items: [
          {
            icon: "../lib/extjs/classic/theme-neptune/resources/images/grid/drop-no.png",
            tooltip: "Delete",
            handler: "delete",
            isDisabled: function (view, rowIndex, colIndex, item, record) {
              return !record.get("IsNew");
            },
          },
        ],
      },
    ],
    dockedItems: [
      {
        xtype: "toolbar",
        dock: "bottom",
        layout: {
          pack: "center",
        },
        ui: "footer",
        fixed: true,
        displayInfo: true,
        items: [
          {
            xtype: "button",
            text: "Add",
            formBind: true,
            handler: "add",
          },
          {
            xtype: "button",
            text: "Update",
            handler: "update",
          },
          {
            xtype: "button",
            text: "Cancel",
            handler: "cancel",
          },
        ],
      },
    ],
    selModel: "cellmodel",
    plugins: [
      Ext.create("Ext.grid.plugin.CellEditing", {
        clicksToEdit: 1,
        autoCancel: true,
      }),
    ],
    listeners: {
      edit: "gridChange",
    },
    layout: "fit",
    height: 600,
    width: "100%",
    //forceFit: true,
    //autofit: true,
    //autoDestroy: true,
  });

  //==============MatchLog Window==============
  Ext.define("CodeTypeWindow", {
    extend: "Ext.window.Window",
    xtype: "CodeTypeWindow",
    title: "Add CodeType",
    closable: true,
    resizable: false,
    closeAction: "hide",
    //height: 600,
    width: 400,
    layout: "fit",
    items: [
      {
        xtype: "form",
        layout: {
          type: "hbox",
          align: "stretch",
          pack: "start",
          padding: 5,
        },
        items: [
          {
            xtype: "container",
            //flex: 1,
            layout: "vbox",
            //margin: '0 0 0 0',
            autoSize: true,
            items: [
              {
                xtype: "displayfield",
                name: "CodeTypeNo",
                //labelWidth: '100%',
                fieldLabel: "CodeType No",
                allowBlank: false,
                clearable: true,
                value: "01",
              },
              {
                xtype: "textfield",
                name: "CodeNo",
                //labelWidth: '100%',
                fieldLabel: "Code No",
                allowBlank: false,
                clearable: true,
              },
              {
                xtype: "textfield",
                name: "CodeName",
                //labelWidth: '100%',
                fieldLabel: "Code Name",
                allowBlank: false,
                clearable: true,
              },
            ],
          },
        ],
        buttonAlign: "center",
        buttons: [
          {
            text: "Create",
            textAlign: "center",
            handler: "createCodeType",
          },
          {
            xtype: "button",
            text: "Cancel",
            handler: "cancel",
          },
        ],
      },
    ],
    hidden: true,
  });

  //==============Panel==============
  Ext.create("Ext.panel.Panel", {
    layout: {
      type: "vbox",
    },
    controller: "CodeViewController",
    viewModel: { type: "CodeViewModel" },
    bodyStyle: "background:transparent;",
    border: false,
    width: 500,
    items: [
      { xtype: "CodeTypeGrid" },
      { xtype: "CodeGrid" },
      { xtype: "CodeTypeWindow" },
    ],
    renderTo: "BodyPanel",
  });
});
