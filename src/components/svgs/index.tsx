'use client'

import { Discord } from './discord'
import { GitHub } from './github'
import { Linkedin } from './linkedin'
import { svgHOC } from './svgHOC'
import { Telegram } from './telegram'
import { WhatsApp } from './whatsApp'
import { LinkExternal } from './linkExternal'
import { TypeScript } from './typescript'
import { Java } from './java'
import { JavaScript } from './javascript'
import { MySQL } from './mysql'
import { Nextjs } from './nextjs'
import { Nodejs } from './nodejs'
import { React } from './react'
import { Sass } from './sass'
import { StyledComponents } from './styledComponents'
import { Tailwind } from './tailwind'
import { Nestjs } from './nestjs'
import { Golang } from './golang'
import { Postgres } from './postgres'
import { MongoDB } from './mongodb'
import { Rust } from './rust'
import { Prisma } from './prisma'
import { Spring } from './spring'

const DiscordWithSVG = svgHOC(Discord)
const GitHubWithSVG = svgHOC(GitHub)
const LinkedinWithSVG = svgHOC(Linkedin)
const WhatsAppWithSVG = svgHOC(WhatsApp)
const TelegramWithSVG = svgHOC(Telegram)
const LinkExternalWithSVG = svgHOC(LinkExternal)
const TypeScriptWithSVG = svgHOC(TypeScript)
const JavaWithSVG = svgHOC(Java)
const JavaScriptWithSVG = svgHOC(JavaScript)
const MySQLWithSVG = svgHOC(MySQL)
const NextjsWithSVG = svgHOC(Nextjs)
const NodejsWithSVG = svgHOC(Nodejs)
const ReactWithSVG = svgHOC(React)
const SassWithSVG = svgHOC(Sass)
const StyledComponentsWithSVG = svgHOC(StyledComponents)
const TailwindWithSVG = svgHOC(Tailwind)
const NestjsWithSVG = svgHOC(Nestjs)
const GolangWithSVG = svgHOC(Golang)
const PostgresWithSVG = svgHOC(Postgres)
const MongoDBWithSVG = svgHOC(MongoDB)
const RustWithSVG = svgHOC(Rust)
const PrismaWithSVG = svgHOC(Prisma)
const SpringWithSVG = svgHOC(Spring)

export {
  DiscordWithSVG as Discord,
  GitHubWithSVG as GitHub,
  LinkedinWithSVG as Linkedin,
  WhatsAppWithSVG as WhatsApp,
  TelegramWithSVG as Telegram,
  LinkExternalWithSVG as LinkExternal,
  TypeScriptWithSVG as TypeScript,
  JavaWithSVG as Java,
  JavaScriptWithSVG as JavaScript,
  MySQLWithSVG as MySQL,
  NextjsWithSVG as Nextjs,
  NodejsWithSVG as Nodejs,
  ReactWithSVG as React,
  SassWithSVG as Sass,
  StyledComponentsWithSVG as StyledComponents,
  TailwindWithSVG as Tailwind,
  NestjsWithSVG as Nestjs,
  GolangWithSVG as Golang,
  PostgresWithSVG as Postgres,
  MongoDBWithSVG as MongoDB,
  RustWithSVG as Rust,
  PrismaWithSVG as Prisma,
  SpringWithSVG as Spring,
}
