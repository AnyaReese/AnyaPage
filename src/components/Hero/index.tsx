import React from 'react'

import { useTrail, animated } from '@react-spring/web'
import Translate from '@docusaurus/Translate'
import { useThemeConfig} from '@docusaurus/theme-common'
import { ThemeConfig } from '@docusaurus/preset-classic'

import Link from '@docusaurus/Link'

import HeroMain from './img/anyahome.svg'

// import JuejinIcon from '@site/static/svg/juejin.svg'
import { Icon } from '@iconify/react'
import Button from '../Button';
import styles from './styles.module.scss'

/* 下滑箭头设计 */
function ArrowDownBtn(): JSX.Element {
  return (
    <span className={styles.arrowDownBtnWrapper}>
      <svg
        className={styles.arrowDownBtn}
        aria-hidden="true"
        viewBox="-75.52 -43.52 599.04 599.04"
        fill="currentColor"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight-40,
            behavior: "smooth"
          })
        }}>
        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z" />
      </svg>
    </span>
  )
}

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  })

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">欢迎来到</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name"> Anya </Translate>
          </span>
          <Translate id="homepage.hero.text5">的主页</Translate>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text1">我是 Anya Reese，浙江大学信息安全 22 级本科生。</Translate><br />
          <Translate id="homepage.hero.text2">如果你想要了解我，可以在这里查看我的个人简历、了解我的技术探索以及业余学习。</Translate><br />
          <Translate id="homepage.hero.text3">当然，一个人的人格底色和实力潜力并不由一些所谓的经历和荣誉决定。祛除网站上的层层包装，我更推荐您在现实生活的接触交往中了解真实的我。</Translate><br />
          <Translate id="homepage.hero.text4">Meet Anya, a bold and creative individual here, and also, in real life.</Translate>
          <br />
          {/* <Translate
            id="homepage.hero.look"
            values={{
              note: (
                <Link to="/docs/stack">
                  <Translate id="hompage.hero.note">笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.project">项目</Translate>
                </Link>
              ),
              link: (
                <Link to="/resource">
                  <Translate id="hompage.hero.link">导航</Translate>
                </Link>
              ),
              idea: (
                <Link to="/tags/">
                  <Translate id="hompage.hero.idea">想法</Translate>
                </Link>
              ),
            }}
          >
          </Translate> */}
          <br />
          {/* 徽章的效果 */}
          {/* TODO: 加入 Github commit 的修改 */}
          <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/anyareese/AnyaPage?label=Update&logo=github" style={{ boxShadow: '0px 16px 30px rgba(0, 0, 0, 0.1)', marginTop: '14px', marginRight: '10px' }} />
          <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/anyareese/AnyaPage/ci.yml?label=CI%20Build&logo=github" style={{ boxShadow: '0px 16px 30px rgba(0, 0, 0, 0.1)', marginTop: '14px' }} />
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.introduce">自我介绍</Translate>
          </a>
          <span> </span>
          <Button isLink href={'https://github.com/anyareese/AnyaPage'} target="_blank">
            <Translate id="hompage.hero.text.repository">Github仓库</Translate>
          </Button>
        </animated.div>
      </div>
      
      
      <div className={styles.bloghome__image}>
        <ArrowDownBtn />
        <HeroMain className={styles.rotate} />
        <ArrowDownBtn />
      </div>
    </animated.div>
  )
}

export function SocialLinks({ ...prop }) {
  const themeConfig = useThemeConfig() as ThemeConfig

  const socials = themeConfig.socials as {
    github: string
    twitter: string
    // juejin: string
    // csdn: string
    // qq: string
    wx: string
    // cloudmusic: string
    zhihu: string
  }

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href="/rss.xml" target="_blank" aria-label="Really Simple Syndication">
        <Icon icon="ri:rss-line" />
      </a>
      <a href={socials.github} target="_blank" aria-label="github">
        <Icon icon="ri:github-line" />
      </a>
      {/* <a href={socials.juejin} target="_blank" aria-label="juejin">
        <JuejinIcon />
      </a> */}
      {/* <a href={socials.qq} target="_blank" aria-label="QQ">
        <Icon icon="ri:qq-line" />
      </a> */}
      <a href={socials.twitter} target="_blank" aria-label="twitter">
        <Icon icon="ri:twitter-line" />
      </a>
      <a href={socials.zhihu} target="_blank" aria-label="zhihu">
        <Icon icon="ri:zhihu-line" />
      </a>
    </animated.div>
  )
}

export default Hero
