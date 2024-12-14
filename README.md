## Anya's Home Page

## 介绍

个人主页网站，<a href="https://docusaurus.io/"> Docusaurus </a>搭建，使用 docusaurus-theme-zen 模板，遵循[MIT](./LICENSE)协议。

## 特性

- 动画效果，响应式设计
- 友好的用户界面
- 主页面双语切换支持
- 主题色切换时图片同时响应

## 目录结构

```bash
├── blog                           # 博客
│   ├── first-blog.md
│   └── authors.yml                # 作者信息(可以多个作者)
├── docs                           # 文档/笔记
│   └── Artz
│         └── introduction.md       # 艺术体育相关内容介绍
│   └── stack
│         └── introduction.md       # 笔记介绍
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
└── yarn.lock
```

## 安装

克隆仓库并安装依赖
```bash
git clone https://github.com/anyareese/AnyaPage.git ./blog
cd blog
yarn
yarn start
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

该流程配置部署在 GitHub Pages 上面，每次 push 到 main 分支时，将自动部署到 gh-pages 分支。

新建一个 Github 个人账号密钥，将密钥添加到仓库的 `Settings` -> `Secrets` -> `New repository secret` 中

新建 `gh-pages` 分支，将该分支的 `./root` 设置为 Github Page 的 Source

修改 `/.github/workflows/ci.yml` 路径下的配置文件

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

      - name: Github page Deploy
        uses: wrm244/docusaurus-deploy-action@master # 
        env:
          PERSONAL_TOKEN: ${{ secrets.PERSION_TOKEN }} # Github个人账号密钥
          PUBLISH_REPOSITORY: anyareese/AnyaPage # 公共仓库，格式：GitHub 用户名/仓库名
          BRANCH: gh-pages # 部署分支
          PUBLISH_DIR: ./build # 部署 ./build 目录下的文件
```

## License

[MIT](./LICENSE) © AnyaReese 100%
