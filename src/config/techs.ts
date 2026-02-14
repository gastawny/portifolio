interface ITech {
  name: string
  icon: string
  link: string
  invert?: boolean
}

export interface ITechCategory {
  title: string
  items: ITech[]
}

export const techs: ITechCategory[] = [
  {
    title: 'frontend',
    items: [
      {
        name: 'CSS',
        icon: '/images/techs/css.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
      {
        name: 'Cypress',
        icon: '/images/techs/cypress.svg',
        link: 'https://www.cypress.io',
      },
      {
        name: 'Figma',
        icon: '/images/techs/figma.svg',
        link: 'https://www.figma.com',
      },
      {
        name: 'HTML',
        icon: '/images/techs/html.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      },
      {
        name: 'JavaScript',
        icon: '/images/techs/javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'NextJS',
        icon: '/images/techs/nextjs.svg',
        link: 'https://nextjs.org',
        invert: true,
      },
      {
        name: 'React',
        icon: '/images/techs/react.svg',
        link: 'https://react.dev',
      },
      {
        name: 'Svelte',
        icon: '/images/techs/svelte.svg',
        link: 'https://svelte.dev',
      },
      {
        name: 'TailwindCSS',
        icon: '/images/techs/tailwindcss.svg',
        link: 'https://tailwindcss.com',
      },
      {
        name: 'Tanstack (React) Query',
        icon: '/images/techs/tanstack-query.svg',
        link: 'https://tanstack.com/query/latest',
      },
      {
        name: 'Typescript',
        icon: '/images/techs/typescript.svg',
        link: 'https://www.typescriptlang.org',
      },
      {
        name: 'Vite',
        icon: '/images/techs/vite.svg',
        link: 'https://vitejs.dev',
      },
    ],
  },
  {
    title: 'backend',
    items: [
      {
        name: 'BullMQ',
        icon: '/images/techs/bullmq.svg',
        link: 'https://bullmq.io',
        invert: true,
      },
      {
        name: 'Drizzle',
        icon: '/images/techs/drizzle.svg',
        link: 'https://orm.drizzle.team',
      },
      {
        name: 'ElysiaJS',
        icon: '/images/techs/elysiajs.svg',
        link: 'https://elysiajs.com',
      },
      {
        name: 'Express',
        icon: '/images/techs/express.svg',
        link: 'https://expressjs.com',
      },
      {
        name: 'Java',
        icon: '/images/techs/java.svg',
        link: 'https://www.java.com',
      },
      {
        name: 'JavaScript',
        icon: '/images/techs/javascript.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'Laravel',
        icon: '/images/techs/laravel.svg',
        link: 'https://laravel.com',
      },
      {
        name: 'NestJS',
        icon: '/images/techs/nestjs.svg',
        link: 'https://nestjs.com',
      },
      {
        name: 'Node.js',
        icon: '/images/techs/nodejs.svg',
        link: 'https://nodejs.org',
      },
      {
        name: 'PHP',
        icon: '/images/techs/php.svg',
        link: 'https://www.php.net',
      },
      {
        name: 'Prisma',
        icon: '/images/techs/prisma.svg',
        link: 'https://www.prisma.io',
        invert: true,
      },
      {
        name: 'RabbitMQ',
        icon: '/images/techs/rabbitmq.svg',
        link: 'https://www.rabbitmq.com',
      },
      {
        name: 'Spring Boot',
        icon: '/images/techs/spring-boot.svg',
        link: 'https://spring.io/projects/spring-boot',
      },
      {
        name: 'Typescript',
        icon: '/images/techs/typescript.svg',
        link: 'https://www.typescriptlang.org',
      },
    ],
  },
  {
    title: 'database',
    items: [
      {
        name: 'MongoDB',
        icon: '/images/techs/mongodb.svg',
        link: 'https://www.mongodb.com',
      },
      {
        name: 'MySQL',
        icon: '/images/techs/mysql.svg',
        link: 'https://www.mysql.com',
      },
      {
        name: 'PostgreSQL',
        icon: '/images/techs/postgresql.svg',
        link: 'https://www.postgresql.org',
      },
      {
        name: 'Redis',
        icon: '/images/techs/redis.svg',
        link: 'https://redis.io',
      },
    ],
  },
  {
    title: 'infrastructure',
    items: [
      {
        name: 'AWS',
        icon: '/images/techs/aws.svg',
        link: 'https://aws.amazon.com',
      },
      {
        name: 'Docker',
        icon: '/images/techs/docker.svg',
        link: 'https://www.docker.com',
      },
      {
        name: 'Github Actions',
        icon: '/images/techs/github-actions.svg',
        link: 'https://github.com/features/actions',
      },
      {
        name: 'Google Cloud',
        icon: '/images/techs/google-cloud.svg',
        link: 'https://cloud.google.com',
      },
      {
        name: 'Vercel',
        icon: '/images/techs/vercel.svg',
        link: 'https://vercel.com',
        invert: true,
      },
    ],
  },
  {
    title: 'version-control',
    items: [
      {
        name: 'Git',
        icon: '/images/techs/git.svg',
        link: 'https://git-scm.com',
      },
      {
        name: 'Github',
        icon: '/images/techs/github.svg',
        link: 'https://github.com',
        invert: true,
      },
    ],
  },
]
