import React from 'react'
import Layout from '@theme/Layout'

import FriendCard from './_components/FriendCard'
import { Friends, type Friend } from '@site/data/friend'

import styles from './styles.module.css'

const TITLE = 'TOD: 添加友情链接'
const DESCRIPTION = 'TODO: 申请友链请点击下方申请(暂未实现)'
// const ADD_FRIEND_URL = 'https://github.com/244/wikiblog/edit/main/data/friend.tswrm'

function FriendHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        // href={ADD_FRIEND_URL}
        target="_blank"
        rel="noreferrer"
      >
        🔗 申请友链
      </a>
    </section>
  )
}

function FriendCards() {
  const friends = Friends
  return (
    <section className="margin-top--lg margin-bottom--lg">
      <div className="container">
        <ul className={styles.showcaseList}>
          {friends.map(friend => (
            <FriendCard key={friend.avatar} friend={friend} />
          ))}
        </ul>
      </div>
    </section>
  )
}

function FriendLink(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <FriendHeader />
        <FriendCards />
      </main>
    </Layout>
  )
}

export default FriendLink
