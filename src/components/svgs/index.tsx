'use client'

import { Discord } from './discord'
import { GitHub } from './github'
import { Linkedin } from './linkedin'
import { svgHOC } from './svgHOC'
import { Telegram } from './telegram'
import { WhatsApp } from './whatsApp'
import { LinkExternal } from './linkExternal'

const DiscordWithSVG = svgHOC(Discord)
const GitHubWithSVG = svgHOC(GitHub)
const LinkedinWithSVG = svgHOC(Linkedin)
const WhatsAppWithSVG = svgHOC(WhatsApp)
const TelegramWithSVG = svgHOC(Telegram)
const LinkExternalWithSVG = svgHOC(LinkExternal)

export {
  DiscordWithSVG as Discord,
  GitHubWithSVG as GitHub,
  LinkedinWithSVG as Linkedin,
  WhatsAppWithSVG as WhatsApp,
  TelegramWithSVG as Telegram,
  LinkExternalWithSVG as LinkExternal,
}
