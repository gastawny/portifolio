import styles from './styles.module.scss'
import { Command } from './Command'
import terminalCommands from '@/utils/terminalCommands.json'

export function Terminal() {
  return (
    <div className={styles['terminal']}>
      <span className="absolute left-1/2 -translate-x-1/2 mt-1 opacity-60">gastawny@about:~</span>
      <div className={styles['topBarButtons']}></div>

      <div className="mt-8 h-full p-4 flex flex-col gap-4">
        {terminalCommands.map((command, index) => (
          <Command key={index} title={command.title}>
            {command.text}
          </Command>
        ))}
      </div>
    </div>
  )
}
