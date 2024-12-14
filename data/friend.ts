export const Friends: Friend[] = [
  {
    title: 'AnyaReese 的技术存档',
    description: '计算机研究，艺术爱好者',
    website: 'https://anyareese.github.com', // 暂时没有挂友链
    avatar: '/assets/images/friends/avatar.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
