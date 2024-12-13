export const Friends: Friend[] = [
  {
    title: 'AnyaReese 的技术存档',
    description: '计算机研究，艺术爱好者',
    website: 'https://wrm244.gxist.cn',
    avatar: '/assets/images/friends/avatar.png',
  },
  //请按照以上格式提交请求，avatar可以是超链接。
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: any
}
