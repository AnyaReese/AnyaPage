
## Anya's Home Page

## 介绍

 个人主页网站，<a href="https://docusaurus.io/"> Docusaurus </a>搭建，使用 docusaurus-theme-zen 模板，遵循[MIT](./LICENSE)协议。


## 特性


## 目录结构

```bash
├── blog                           # 博客
│   ├── first-blog.md
│   └── authors.yml                # 作者信息(可以多个作者)
├── docs                           # 文档/笔记
│   └── stack
│         └──introduction.md       # 笔记介绍
├── data                           # 项目/导航/友链数据
│   ├── friend.ts                  # 友链
│   ├── project.ts                 # 项目
│   └── resource.ts                # 资源导航
├── i18n                           # 国际化
├── src
│   ├── components                 # 组件
│   ├── css                        # 自定义CSS
│   ├── pages                      # 自定义页面
│   ├── plugin                     # 自定义插件
│   └── theme                      # 自定义主题组件
├── static                         # 静态资源文件
│   └── assets                     # 静态文件
├── docusaurus.config.js           # 站点的配置信息
├── sidebars.js                    # 文档的侧边栏
├── package.json
└── yarn.lock                      # 建议使用yarn保留
```

## 安装

克隆仓库并安装依赖
```bash
git clone https://github.com/wrm244/docusaurus-theme-zen.git ./blog
cd blog
yarn
yarn start
```

国内仓库备份
```bash
git clone https://gitee.com/wrm244/docusaurus-theme-zen.git ./blog
cd blog
yarn
```

生成静态网页代码(./build)

```bash
yarn run build
```

启动服务
```bash
yarn run serve
```

## Github Action CI
该流程配置会同步部署到云服务器与GitHub Pages上面：
修改```/.github/workflows/ci.yml```路径下的配置文件
```yml
name: ci

on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Use Node.js v18.5
        uses: actions/setup-node@v3
        with:
          node-version: '18.5.0'

      #使用缓存
      - name: Cache node modules
        uses: actions/cache@v1
        id: cache
        with:
          path: node_modules
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - name: Install Dependencies
        if: steps.cache.outputs.cache-hit != 'true'
        run: yarn install
      
      - name: Build Project
        run: |
          yarn run build

      #使用SSH同步到云服务器
      # - name: SSH Deploy
      #   uses: easingthemes/ssh-deploy@v2.2.11
      #   env:
      #     SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
      #     ARGS: '-avzr --delete'
      #     SOURCE: './build'
      #     REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
      #     REMOTE_USER: 'root'
      #     TARGET: '/www/wwwroot/wrm244'

      - name: Github page Deploy
        uses: wrm244/docusaurus-deploy-action@master # 
        env:
          PERSONAL_TOKEN: ${{ secrets.PERSION_TOKEN }} # 你的Github个人账号密钥
          PUBLISH_REPOSITORY: wrm244/docusaurus-theme-zen # 公共仓库，格式：GitHub 用户名/仓库名
          BRANCH: gh-pages # 部署分支
          PUBLISH_DIR: ./build # 部署 ./build 目录下的文件

```


## License

[MIT](./LICENSE) © 河山 100%
