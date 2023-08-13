import styles from './styles.module.scss'
import { Repositorie } from './Repositorie'
import { IRepositorie } from '@/interfaces/Repositorie'

export async function Root({ children }: { children: React.ReactNode }) {
  // const response = await fetch('https://api.github.com/users/gastawny/repos')
  // const data = await response.json()
  // const repositories = data.map((repositorie: any) => ({
  //   repo: repositorie.name,
  //   technology: repositorie.language,
  //   description: repositorie.description,
  //   url: repositorie.html_url,
  //   pushed_at: repositorie.pushed_at,
  // }))
  // const orderedRepositories = repositories.sort(
  //   (a: any, b: any) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
  // )
  const orderedRepositories: IRepositorie[] = [
    {
      repo: 'portifolio',
      technology: 'TypeScript',
      description: null,
      url: 'https://github.com/gastawny/portifolio',
      pushed_at: '2023-08-12T17:59:22Z',
    },
    {
      repo: 'gastawny',
      technology: null,
      description: null,
      url: 'https://github.com/gastawny/gastawny',
      pushed_at: '2023-07-16T18:19:35Z',
    },
    {
      repo: 'engSoftware-back',
      technology: 'TypeScript',
      description: null,
      url: 'https://github.com/gastawny/engSoftware-back',
      pushed_at: '2023-06-28T03:03:41Z',
    },
    {
      repo: 'marketplace',
      technology: 'TypeScript',
      description: 'marktetplace FrontEnd',
      url: 'https://github.com/gastawny/marketplace',
      pushed_at: '2023-05-27T02:52:41Z',
    },
    {
      repo: 'api-portifolio',
      technology: 'TypeScript',
      description: null,
      url: 'https://github.com/gastawny/api-portifolio',
      pushed_at: '2023-03-16T00:41:38Z',
    },
    {
      repo: 'todo-react',
      technology: 'CSS',
      description: null,
      url: 'https://github.com/gastawny/todo-react',
      pushed_at: '2023-02-21T20:59:59Z',
    },
    {
      repo: 'calculadora',
      technology: 'JavaScript',
      description: 'Calculadora em React.js',
      url: 'https://github.com/gastawny/calculadora',
      pushed_at: '2023-01-27T12:04:07Z',
    },
    {
      repo: 'Projeto-ED-LAB',
      technology: 'C',
      description: null,
      url: 'https://github.com/gastawny/Projeto-ED-LAB',
      pushed_at: '2022-12-07T13:12:13Z',
    },
    {
      repo: 'ED',
      technology: 'C',
      description: null,
      url: 'https://github.com/gastawny/ED',
      pushed_at: '2022-11-29T22:47:52Z',
    },
    {
      repo: 'Algoritmos',
      technology: 'C',
      description: null,
      url: 'https://github.com/gastawny/Algoritmos',
      pushed_at: '2022-07-08T19:56:28Z',
    },
  ]

  return (
    <>
      <h1 className={styles.title}>My Projects</h1>
      <div className="flex flex-col justify-center items-center mt-12 sm:mt-16 2xl:mt-24 mb-8 sm:mb-12 2xl:mb-20 gap-16 sm:gap-24 2xl:gap-32">
        {children}
      </div>
      <h2 className={styles['repositories-title']}>Repositories</h2>
      <p className="font-normal tracking-widest mb-12 md:mb-16 text-center text-base md:text-xl">
        A list of all of the public repositories on my GitHub.
      </p>
      <div className="flex flex-col w-[90%] mb-16 mx-auto gap-4 md:w-auto md:grid md:grid-cols-2 md:mx-[10%] md:2xl:mx-[20%] md:gap-6 2xl:gap-8">
        {orderedRepositories.map((repositorie) => (
          <Repositorie {...repositorie} />
        ))}
      </div>
    </>
  )
}
