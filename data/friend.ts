export const Friends: Friend[] = [
  {
    title: 'AnyaReese Github 主页',
    description: '计算机研究，艺术爱好者',
    website: 'https://github.com/AnyaReese', // 暂时没有挂友链
    avatar: '/AnyaPage/assets/images/social/avatar.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
