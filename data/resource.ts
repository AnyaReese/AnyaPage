import { Friends } from './friend'

export interface Resource {
  name: string
  logo: string
  desc: string
  href: string
  tags?: string[]
}

export interface ResourceCategory {
  name: string
  resources: Resource[]
}

const friends: Resource[] = Friends.map(f => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const resourceData: ResourceCategory[] = [
  {
    name: '暂未添加友链👨‍💻',
    resources: friends,
  },
  {
    name: '',
    resources: [
      {
        name: '动手学深度学习',
        desc: '面向中文读者的能运行、可讨论的深度学习教科书',
        logo: '/AnyaPage/assets/images/avatar.png',
        href: 'https://zh.d2l.ai/',
      },
    ],
  },
]
