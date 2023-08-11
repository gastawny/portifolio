import styles from './styles.module.scss'

interface IRootProps {
  children: React.ReactNode
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  message: string
}

export function Root({ children, onSubmit, message }: IRootProps) {
  return (
    <div className="h-[calc(100vh-4.4rem)] 2xl:h-[calc(100vh-6rem)] flex items-center justify-center">
      <div className={styles.box}>
        <form onSubmit={onSubmit} className="absolute inset-1 rounded-lg bg-bgColorDark z-10">
          <div className="w-4/5 m-[8%] 2xl:m-[10%] mx-auto">
            <h1 className="text-primary text-4xl 2xl:text-5xl font-semibold tracking-widest text-center mb-6 2xl:mb-8">
              Contact Me
            </h1>
            <div className="flex flex-col gap-8 2xl:gap-10">{children}</div>
            <div className="flex mt-6 2xl:mt-8 items-center gap-4">
              <input
                type="submit"
                value="Send"
                className="py-2 px-7 2xl:px-8 tracking-wider text-lg 2xl:text-xl cursor-pointer bg-primaryExtraDark text-fontColor rounded-sm duration-300 ease-in-out hover:bg-primaryDark"
              />
              <div className="text-secondary text-xl 2xl:text-2xl tracking-widest">{message}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
