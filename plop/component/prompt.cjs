const toUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1)

module.exports = {
  description: 'Create vue component',
  prompts: [
    {
      type: 'input',
      name: 'path',
      message: '请输入路径（Please enter the component path）',
      default: 'common',
    },
    {
      type: 'input',
      name: 'name',
      message: '请输入组件名称（Please enter the component name）',
    },
  ],
  actions: (data) => {
    const { name, path } = data
    const upperFirstName = toUpperCase(name)
    const upperFirstPath = toUpperCase(path)
    const templateData = {
      name,
      dtime: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
      upperFirstName,
      upperFirstPath,
    }
    const actions = []
    if (name) {
      actions.push(
        {
          type: 'add',
          path: `./src/components/${upperFirstPath}/src/${upperFirstName}.vue`,
          templateFile: './plop/component/component.hbs',
          data: templateData,
          skipIfExists: true,
        },
        {
          type: 'add',
          path: `./src/components/${upperFirstPath}/index.ts`,
          templateFile: './plop/component/index.hbs',
          data: templateData,
          skipIfExists: true,
        },
        {
          type: 'append',
          path: `./src/components/${upperFirstPath}/index.ts`,
          templateFile: './plop/component/append.hbs',
          data: templateData,
        }
      )
    }

    return actions
  },
}
