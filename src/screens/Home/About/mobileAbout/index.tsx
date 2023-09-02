import Terminal from '../Terminal'
import terminalCommands from '@/utils/terminalCommands.json'

export function MobileAbout() {
  return (
    <div className="flex md:hidden flex-col items-center gap-4">
      <Terminal.Root process="gastawny@getToKnowMe:~">
        <div className="flex">
          <div className="flex flex-col mt-4 p-4 gap-4">
            <div className="flex flex-col md:gap-2 2xl:gap-4">
              {terminalCommands[0].commands.map((command, index) => (
                <Terminal.Command key={index} title={command.title}>
                  {command.text}
                </Terminal.Command>
              ))}
            </div>
          </div>
        </div>
      </Terminal.Root>
      <Terminal.Root process="gastawny@experience:~">
        <div className="flex">
          <div className="flex flex-col mt-4 p-4 gap-4">
            <div className="flex flex-col md:gap-2 2xl:gap-4">
              {terminalCommands[1].commands.map((command, index) => (
                <Terminal.Command key={index} title={command.title}>
                  {command.text}
                </Terminal.Command>
              ))}
            </div>
          </div>
        </div>
      </Terminal.Root>
    </div>
  )
}
