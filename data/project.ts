export const projects: Project[] = [
  {
    title: 'CS144 课程仓库',
    description: '存放斯坦福 CS144 计算机网络课程的解题代码',
    preview: '/AnyaPage/assets/images/project/cs144.png',
    website: 'https://github.com/AnyaReese/sponge',
    source: 'https://github.com/AnyaReese/sponge',
    tags: ['opensource', 'design', 'favorite'],
    type: 'other',
  },
  {
    title: 'AnyaPage',
    description: 'AnyaReese 的个人博客',
    preview: '/AnyaPage/assets/images/project/blog.png',
    website: 'https://anyareese.github.io/AnyaPage',
    source: 'https://github.com/AnyaReese/AnyaPage',
    tags: ['personal', 'design', 'favorite'],
    type: 'other',
  },
]

export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'

export type ProjectType = 'personal' | 'web' | 'app' | 'Curriculum Design'| 'toy' | 'other' 

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
  type: ProjectType
}

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
}

export const TagList = Object.keys(Tags) as TagType[]

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project
  group[type] = group[type] ?? []
  group[type].push(project)
  return group
}, {} as Record<ProjectType, Project[]>)
