const path = require('path')
const math = require('remark-math');
const katex = require('rehype-katex');
const announcementBarContent = `🎉 Welcometo Anya Reese's Home Page`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AnyaReese',
  titleDelimiter: '-',
  url: 'https://anyareese.github.io/',
  baseUrl: '/AnyaPage/',
  favicon: '/assets/images/social/avatar.ico',
  organizationName: '',
  projectName: 'AnyaReese',
  tagline: 'AnyaReese',
  onBrokenLinks: 'ignore',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: '/assets/images/social/avatar.png',
    announcementBar: {
       id: 'announcementBar-3',
      content: announcementBarContent,
     },
    mermaid: {
      theme: { light: 'neutral', dark: 'forest' },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      showLinenums: true,
    },
    metadata: [
      {
        name: 'keywords',
        content: 'docusaurus-theme-zen',
      },
      {
        name: 'keywords',
        content: 'blog, art, python, javascript, react, vue',
      },
      {
        name: 'keywords',
        content: ' 编程爱好者',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: 'AnyaReese',
      logo: {
        alt: 'AnyaReese\'s quick overview',
        src: '/assets/images/social/avatar.png',
        srcDark: '/assets/images/social/avatar.png',
      },
      hideOnScroll: false,
      items: [
        {
          label: '个人足迹',
          position: 'left',
          items: [
            {
              label: '简历',
              to: 'tags',
            },
            {
              label: '技术探索',
              to: 'archive',
            },
            {
              label: '随笔',
              to: 'tags/lifestyle',
            },
          ],
        },
        {
          label: '艺术笔记',
          position: 'left',
          to: 'docs/stack/',
          items: [
            {
              label: '个人创作',
              to: 'first-blog',
            },
            {
              label: '深入人心的作品',
              to: 'docs/stack/',
            },
          ],
        },
        {
          label: '导航',
          position: 'left',
          to: 'resource',
        },
        {
          label: '项目',
          position: 'left',
          to: 'project',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客',
          items: [
            {
              label: '标签',
              to: 'tags',
            },
            {
              label: '归档',
              to: 'archive',
            },

          ],
        },
        {
          title: '学习',
          items: [
            {
              label: '笔记',
              to: 'docs/stack',
            },
            {
              label: '项目',
              to: 'project',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/anyareese',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '友链',
              to: 'friends',
            },
            {
              label: '导航',
              to: 'resource',
            },
            {
              html: `<a href="https://docusaurus.io/zh-CN/" target="_blank"><img alt="Built with Docusaurus" style="height:50px;margin-top:0.5rem" src="/assets/images/buildwith.png" /></a> <a href="https://www.netlify.com/" target="_blank"><img alt="Built with Netlify" style="height:50px;margin-top:0.5rem" src="/assets/images/netlify-color-accent.svg" /></a>`,
            },
          ],
        },
      ],
      copyright: `版权所有 © ${new Date().getFullYear()} docusaurus-theme-zen, 此网站使用 <a href="https://docusaurus.io/zh-CN/" target="_blank">Docusaurus</a> 搭建
      <span id="runtime_span"></span>
      <script type="text/javascript">function show_runtime(){window.setTimeout("show_runtime()",1000);X=new 
      Date("10/16/2022 8:22:00");
      Y=new Date();T=(Y.getTime()-X.getTime());M=24*60*60*1000;
      a=T/M;A=Math.floor(a);b=(a-A)*24;B=Math.floor(b);c=(b-B)*60;C=Math.floor((b-B)*60);D=Math.floor((c-C)*60);
      runtime_span.innerHTML="<br>本站已运行: "+A+"天"+B+"小时"+C+"分"+D+"秒"}show_runtime();</script>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    // algolia: { algolia 评论插件需要安装
    //   appId: 'S4K9Vx4X',
    //   apiKey: '3bf796bbbc1561253bcb25dafc',
    //   indexName: 'wikiblog',
    // },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: '#eef9fd',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        magin: 10,
        scrollOffset: 0,
      },
    },
    giscus: {
      repo: 'anyareese/AnyaPage',
      repoId: 'R_kgDOJZ-VIA',
      category: 'General',
      categoryId: 'DIC_kwDOJZ-VIM4CV95r',
      loading: "lazy",
      lang: "zh-CN",
    },
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {// TODO 个人社交媒体，没有的换个 icon
      github: 'https://github.com/anyareese',
      twitter: 'https://twitter.com/',
      csdn: 'https://blog.csdn.net/',
      zhihu: 'https://www.zhihu.com/',
    },
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'description',
        content: 'docusaurus-theme-zen',
      },
    },
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    // 'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/wrm244/docusaurus-theme-zen/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogDescription: 'docusaurus-theme-zen',
        blogSidebarCount: 10,
        blogSidebarTitle: '最近更新',
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'docusaurus-theme-zen',
          copyright: `Copyright © ${new Date().getFullYear()} AnyaReese Built with Docusaurus. class="footer_lin">`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 80,
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'assets/images/social/avatar.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {

            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [
    {
    href: 'https://jsd.onmicrosoft.cn/npm/katex@0.13.24/dist/katex.min.css',
    type: 'text/css',
    integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
    crossorigin: 'anonymous',
  },],
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['en', 'zh-CN'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        language: ["en", "zh"],
        indexBlog: true,
        indexPages: true,
        indexDocs: true,
      }),
    ],
  ],
}

module.exports = config
