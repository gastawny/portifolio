'use client'

import styles from './styles.module.scss'
import { Button } from '@/components/Button'
import { Discord, GitHub, Linkedin, Telegram, WhatsApp } from '@/components/svgs'
// import { useScroll } from 'contexts/Scroll'
import { useWidth } from '@/hooks/useWidth'

export function Photograph() {
  // const { scrollToLocal } = useScroll()
  const { layout } = useWidth()

  return (
    <>
      <span className="fixed left-1/2 -translate-x-1/2 top-4 bg-primaryExtraDark px-4 py-2 rounded">
        User copied to the Clipboard
      </span>
      <main className={styles['Photograph']}>
        <div className={styles['card']}>
          <div className={styles['lines']}></div>
          <div className={styles['imgBx']}>
            <img src="/assets/images/photograph.png" />
          </div>
          <div className={styles['content']}>
            <div className={styles['details']}>
              <h1 className={styles['title']}>
                Gabriel Stawny
                <br />
                <span>Full Stack Dev</span>
              </h1>
              <div className={styles['medias']}>
                {/* <a onClick={() => discordClick()}>
                  <Discord  />
                </a> */}
                <a href="https://wa.me/5542999099180" target="_blank" rel="noreferrer">
                  <WhatsApp />
                </a>
                <a href="https://github.com/gastawny" target="_blank" rel="noreferrer">
                  <GitHub />
                </a>
                <a href="https://t.me/gastawny" target="_blank" rel="noreferrer">
                  <Telegram />
                </a>
                <a
                  href="https://www.linkedin.com/in/gabriel-stawny-ab4529234/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin />
                </a>
              </div>
              {layout !== 'sm' && (
                <div className="flex justify-between gap-4 sm:gap-6 2xl:gap-8">
                  <Button
                    // clicked={() => scrollToLocal('About')}
                    onClick={() => {}}
                    className="w-[1.2rem] xl:w-[9.6rem] 2xl:w-[12rem] text-[1.2rem] xl:text-[1.28rem] 2xl:text-[1.6rem]"
                  >
                    About
                  </Button>
                  <Button
                    // clicked={() => scrollToLocal('Skills')}
                    onClick={() => {}}
                    className="w-[1.2rem] xl:w-[9.6rem] 2xl:w-[12rem] text-[1.2rem] xl:text-[1.28rem] 2xl:text-[1.6rem]"
                  >
                    Skills
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
