import styles from './styles.module.scss'
import { Command } from './Command'
import terminalCommands from '@/utils/terminalCommands.json'

export function Terminal() {
  return (
    <div className={styles['terminal']}>
      <span className="lg:text-sm 2xl:text-base absolute left-1/2 -translate-x-1/2 mt-1 opacity-60">
        gastawny@about:~
      </span>
      <div className={styles['topBarButtons']}></div>
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-[86%] mt-4 w-[0.2rem] bg-secondary rounded bg-opacity-10"></div>
      <div className="flex">
        {terminalCommands.map((window, index) => (
          <div key={index} className={styles['commandsContainer']}>
            <span className="lg:text-sm 2xl:text-base mt-1 absolute left-1/2 -translate-x-1/2 tracking-widest text-zinc-400 font-semibold">
              {window.window}
            </span>
            <div className="flex flex-col lg:gap-2 2xl:gap-4">
              {window.commands.map((command, index) => (
                <Command key={index} title={command.title}>
                  {command.text}
                </Command>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
