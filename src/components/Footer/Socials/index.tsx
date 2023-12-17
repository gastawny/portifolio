import styles from './styles.module.scss'
import { Discord } from '@/components/svgs/discord'
import { GitHub } from '@/components/svgs/github'
import { Linkedin } from '@/components/svgs/linkedin'
import { Telegram } from '@/components/svgs/telegram'
import { WhatsApp } from '@/components/svgs/whatsApp'

export function Socials() {
  return (
    <div className={styles['medias']}>
      <a aria-label="copy my user on Discord" href="#">
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
  )
}
