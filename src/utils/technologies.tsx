import {
  Golang,
  Java,
  JavaScript,
  MongoDB,
  MySQL,
  Nestjs,
  Nextjs,
  Nodejs,
  Postgres,
  Prisma,
  React,
  Rust,
  Sass,
  Spring,
  StyledComponents,
  Tailwind,
  TypeScript,
} from '@/components/svgs'

const responsiveSize = { sm: '2.25rem', xl: '3rem', '2xl': '4rem' }

export const technologies = [
  {
    name: 'Frontend',
    techs: [
      {
        icon: <Nextjs responsiveSize={responsiveSize} />,
        link: 'https://nextjs.org/',
        name: 'Next.js',
      },

      {
        icon: <React responsiveSize={responsiveSize} />,
        link: 'https://reactjs.org/',
        name: 'React',
      },
      {
        icon: <Sass responsiveSize={responsiveSize} />,
        link: 'https://sass-lang.com/',
        name: 'Sass',
      },
      {
        icon: <StyledComponents responsiveSize={responsiveSize} />,
        link: 'https://styled-components.com/',
        name: 'Styled Components',
      },
      {
        icon: <Tailwind responsiveSize={responsiveSize} />,
        link: 'https://tailwindcss.com/',
        name: 'Tailwind',
      },
      {
        icon: <JavaScript responsiveSize={responsiveSize} />,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        name: 'JavaScript',
      },
    ],
  },
  {
    name: 'Backend',
    techs: [
      {
        icon: <TypeScript responsiveSize={responsiveSize} />,
        link: 'https://www.typescriptlang.org/',
        name: 'TypeScript',
      },
      {
        icon: <Nestjs responsiveSize={responsiveSize} />,
        link: 'https://nestjs.com/',
        name: 'Nestjs',
      },
      {
        icon: <Nodejs responsiveSize={responsiveSize} />,
        link: 'https://nodejs.org/',
        name: 'Node.js',
      },
      {
        icon: <Rust responsiveSize={responsiveSize} />,
        link: 'https://www.rust-lang.org/',
        name: 'Rust',
      },
      {
        icon: <Golang responsiveSize={responsiveSize} />,
        link: 'https://go.dev/',
        name: 'Go',
      },
      {
        icon: <Spring responsiveSize={responsiveSize} />,
        link: 'https://www.spring.io/',
        name: 'Spring',
      },
      {
        icon: <Java responsiveSize={responsiveSize} />,
        link: 'https://www.java.com/',
        name: 'Java',
      },
    ],
  },
  {
    name: 'Database',
    techs: [
      {
        icon: <MySQL responsiveSize={responsiveSize} />,
        link: 'https://www.mysql.com/',
        name: 'MySQL',
      },
      {
        icon: <Postgres responsiveSize={responsiveSize} />,
        link: 'https://www.postgresql.org/',
        name: 'Postgres',
      },
      {
        icon: <MongoDB responsiveSize={responsiveSize} />,
        link: 'https://www.mongodb.com/',
        name: 'MongoDB',
      },
      {
        icon: <Prisma responsiveSize={responsiveSize} />,
        link: 'https://www.prisma.io/',
        name: 'Prisma',
      },
    ],
  },
]
