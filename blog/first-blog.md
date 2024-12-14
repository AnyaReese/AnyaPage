---
slug: first-blog
title: Anya's first blog
date: 2024-12-14
tags: [anya, ZJU, Docusaurus, LifeHack, Tech]
authors: AnyaReese
---

import LogoSwitcher from '@site/src/components/Logo/LogoSwitcher';

<LogoSwitcher />


## AnyaReese Home Page

![GitHub last commit](https://img.shields.io/github/last-commit/anyareese/AnyaPage?label=update&logo=github)

![GitHub Action](https://img.shields.io/github/actions/workflow/status/anyareese/AnyaPage/ci.yml?label=CI%20Build&logo=github)

## 介绍

我是安假李四，这是我第一次接触 Docusaurus 和 react 项目，在不断学习的路上，plus est en vous: There's more in me(you).

<!-- truncate -->

> 这是我的第一篇博客。

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
git clone https://github.com/anyareese/AnyaPage.git ./Anya
cd Anya
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

## Github 部署 

在 .github/workflows/gh-pages.yml 中配置自动部署，设置 `repo` 环境变量

在 `repo` 环境变量中设置 PERSONAL_TOKEN 作为 `secret`

新建 `gh-pages` 分支，在 `repo pages` 界面选择 `gh-pages` 分支 `/root` 路径作为静态文件源

每次 push 时自动执行 workflow，将静态文件推送到 `gh-pages` 分支并在 github.io 上部署

## 📝License

[MIT](./LICENSE) © AnyaReese 100%

