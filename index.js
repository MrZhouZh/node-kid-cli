#!/usr/bin/env node

// 执行复杂命令
const program = require('commander')
// 添加交互
const inquirer = require('inquirer')
// 执行 shell 脚本
const shell = require('shelljs')
const pkg = require('./package.json')

const initAction = () => {
  inquirer
    .prompt([{
      type: 'input',
      message: 'Please enter the project name:',
      name: 'name'
    }])
    .then(answers => {
      console.log('The project name is: ', answers.name)
      console.log('Coping project...Please waiting...')
      const remote = 'https://coding.jd.com/zhouzhikai3/issus_collection.git'
      const curName = 'issus_collection'
      const tarName = answers.name

      shell.exec(
        `
          git clone ${remote} --depth=1
          mv ${curName} ${tarName}
          rm -rf ./${tarName}/.git
          cd ${tarName}
        `,
        (error, stdout, stderr) => {
          if (error) {
            console.error( `exec error: ${error}`)
            return
          }
          console.log(`${stdout}`)
          console.log(`${stderr}`)
        }
      )
    })
}

// 设置 proxy
// program
//   .command('proxy')
//   .description('对 npm 和 git 进行代理')
//   .action(() => {
//     shell.exec(
//       `
//         git config --global http.proxy http://web-proxy.tencent.com:8080
//         npm config set https-proxy http://web-proxy.oa.com:8080
//         npm config set registry https://registry.npm.taobao.org
//       `
//     )
//     console.log('代理成功...')
//     console.log('您可以在内网用 git 去拷贝外网的代码仓库, 也可以使用 npm 在内网安装依赖')
//   })

//   program
//   .command('tencent')
//   .description('去除 npm 和 git 代理')
//   .action(() => {
//     shell.exec(
//       `
//         git config --global --unset http.proxy
//         npm config rm https-proxy
//         npm config set registry https://registry.npm.taobao.org
//       `
//     )
//     console.log('去除代理成功...')
//     console.log('您可以在内网用 git 去拷贝外网的代码仓库, 也可以使用 npm 在内网安装依赖')
//   })

program.version(pkg.version)
program
  .command('init')
  .description('创建项目')
  .action(initAction)
program.parse(process.argv)
