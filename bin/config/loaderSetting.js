let frontTypes = [
  {
    name: "name",
    type: "list",
    message: "请选择模板类型",
    choices: [
      {
        key: "v",
        name: "vue",
        value: "vue",
      },
      {
        key: "react",
        name: "react",
        value: "react",
      },
    ],
  },
];
let cssLoader = [
  {
    name: "name",
    type: "list",
    message: "请选择css编译器",
    choices: [
      {
        key: "s",
        name: "scss",
        value: "scss",
      },
      {
        key: "l",
        name: "less",
        value: "less",
      },
    ],
  },
];
module.exports = { frontTypes, cssLoader };
