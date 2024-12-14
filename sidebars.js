/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // stack: [
  //   'stack/introduction', // 引用 docs/stack/introduction.md
  // ],
  artz: [
    {
      label: '艺体创作',
      type: 'category',
      link: { type: 'doc', id: 'Artz/intro' }, // 分类主文档，指向 art.md
      items: [
        'Artz/art', // 指向 docs/Artz/art.md
        'Artz/sports', // 指向 docs/Artz/sports.md
      ],
    },
  ],
  personal: [
    {
      label: '个人足迹',
      type: 'category',
      items: [
        'personal/resume', // 指向 docs/personal/resume.md
        'personal/techexplore', // 指向 docs/personal/techexplore.md
        'personal/whatonmymind', // 指向 docs/personal/whatonmymind.md
      ],
    },
  ],
};

module.exports = sidebars;
