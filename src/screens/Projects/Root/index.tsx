import { Endpoints } from '@octokit/types'
import { Repositorie } from './Repositorie'
import { IRepositorie } from '@/interfaces/Repositorie'
import { Title } from '@/components/Title'

type listUserReposParameters = Endpoints['GET /users/{username}/repos']['response']['data'][0]

export async function Root({ children }: { children: React.ReactNode }) {
  const response = await fetch('https://api.github.com/users/gastawny/repos')
  const data: listUserReposParameters[] = await response.json()
  const repositories: IRepositorie[] = data.map((repositorie) => ({
    repo: repositorie.name,
    technology: repositorie.language,
    description: repositorie.description,
    url: repositorie.html_url,
    pushed_at: repositorie.pushed_at,
  }))
  const orderedRepositories = repositories.sort(
    (a: IRepositorie, b: IRepositorie) =>
      new Date(b.pushed_at ?? new Date()).getTime() - new Date(a.pushed_at ?? new Date()).getTime()
  )

  return (
    <>
      <section>
        <Title className="absolute left-1/2 -translate-x-1/2">My Projects</Title>
        <div className="flex flex-col justify-center items-center mt-12 sm:mt-16 2xl:mt-24 mb-8 sm:mb-12 2xl:mb-20 gap-16 sm:gap-24 2xl:gap-32">
          {children}
        </div>
      </section>
      <section>
        <Title className="absolute left-1/2 -translate-x-1/2">Repositories</Title>
        <p className="font-normal tracking-widest mb-12 md:mb-16 text-center text-base md:text-xl">
          A list of all of the public repositories on my GitHub.
        </p>
        <div className="flex flex-col w-[90%] mb-16 mx-auto gap-4 md:w-auto md:grid md:grid-cols-2 md:mx-[10%] md:2xl:mx-[20%] md:gap-6 2xl:gap-8">
          {orderedRepositories.map((repositorie) => (
            <Repositorie key={repositorie.repo} {...repositorie} />
          ))}
        </div>
      </section>
    </>
  )
}
