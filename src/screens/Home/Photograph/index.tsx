'use client'

import styles from './styles.module.scss'
import { Button } from '@/components/Button'
import { Discord, GitHub, Linkedin, Telegram, WhatsApp } from '@/components/svgs'
// import { useScroll } from '@/hooks/useScroll'
import { useState } from 'react'
import { Container } from './Container'

export function Photograph() {
  // const { scrollToLocal } = useScroll()
  const [discord, setDiscord] = useState(false)

  function discordClick() {
    navigator.clipboard.writeText('Gastawny')
    setDiscord(true)
    setTimeout(() => setDiscord(false), 1500)
  }

  function scrollToLocal(id: string) {
    const element = document.getElementById(id)
    window.scrollTo({
      top: element?.offsetTop,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {discord && (
        <span className="fixed z-50 left-1/2 -translate-x-1/2 top-4 bg-primaryExtraDark px-4 py-2 rounded">
          User copied to the Clipboard
        </span>
      )}
      <main className={styles['Photograph']}>
        <Container>
          <h1 className={styles['title']}>
            Gabriel Stawny
            <br />
            <span>Full Stack Dev</span>
          </h1>
          <div className={styles['medias']}>
            <a aria-label="copy my user on Discord" href="#" onClick={() => discordClick()}>
              <Discord />
            </a>
            <a
              aria-label="link to my whatsapp"
              href="https://wa.me/5542999099180"
              target="_blank"
              rel="noreferrer"
            >
              <WhatsApp />
            </a>
            <a
              aria-label="link to my github"
              href="https://github.com/gastawny"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub />
            </a>
            <a
              aria-label="link to my telegram"
              href="https://t.me/gastawny"
              target="_blank"
              rel="noreferrer"
            >
              <Telegram />
            </a>
            <a
              aria-label="link to my linkedin"
              href="https://www.linkedin.com/in/gabriel-stawny-ab4529234/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
          </div>
          <div className={'flex justify-between gap-4 sm:gap-6 2xl:gap-8 ' + styles['buttons']}>
            <Button
              onClick={() => scrollToLocal('About')}
              className="w-[1.2rem] xl:w-[9.6rem] 2xl:w-[12rem] text-[1.2rem] xl:text-[1.28rem] 2xl:text-[1.6rem]"
            >
              About
            </Button>
            <Button
              onClick={() => scrollToLocal('Skills')}
              className="w-[1.2rem] xl:w-[9.6rem] 2xl:w-[12rem] text-[1.2rem] xl:text-[1.28rem] 2xl:text-[1.6rem]"
            >
              Skills
            </Button>
          </div>
        </Container>
      </main>
    </>
  )
}
