Ext.define("CodeModel", {
  extend: "Ext.data.Model",
  fields: [
    { name: "CodeID", type: "int", defaultValue: null },
    { name: "CodeTypeNo", type: "string", defaultValue: null },
    { name: "CodeNo", type: "string", defaultValue: null },
    { name: "CodeName", type: "string", defaultValue: null },
    { name: "IsDisabled", type: "bool", defaultValue: false },
    { name: "IsUpdate", type: "bool", defaultValue: true },
    { name: "IsNew", type: "bool", defaultValue: true },
  ],
  validators: {
    CodeTypeNo: { type: "presence" },
    CodeNo: { type: "presence" },
    CodeName: { type: "presence" },
  },
});
