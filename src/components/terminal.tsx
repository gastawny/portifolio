function Terminal({ children, process }: { children: React.ReactNode; process: string }) {
  return (
    <div className="overflow-hidden rounded-xl bg-muted/60 w-auto shadow">
      <div className="relative top-0 left-0 w-full bg-background/90 h-8">
        <div className="absolute flex gap-2 top-2.5 left-2">
          <div className="h-3 w-3 rounded-full bg-red-400 relative"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 mt-2 lg:mt-1.5 opacity-60 text-xs lg:text-sm whitespace-nowrap overflow-x-auto">
          gastawny@{process}:~
        </span>
      </div>
      <div className="relative z-10 p-4 flex flex-col gap-2 lg:gap-4">{children}</div>
    </div>
  )
}

function TerminalCommand({ children, title }: { children: string[]; title: string }) {
  return (
    <div className="tracking-wide relative text-sm lg:text-base">
      <span className="text-primary">{'>'} </span>
      <span className="text-muted-foreground font-medium">cat </span>
      <span className="text-secondary">{title}.txt</span>
      <div>
        {children.length > 1 && <span className="text-accent-foreground">{'['}</span>}
        <div className="flex flex-col md:gap-1 2xl:gap-2 my-1 lg:my-2">
          {children.map((child, index) => (
            <p key={index} className="text-accent-foreground font-normal">
              {'"' + child + '"' + (index < children.length - 1 ? ',' : '')}
            </p>
          ))}
        </div>
        {children.length > 1 && <span className="text-accent-foreground">{']'}</span>}
      </div>
    </div>
  )
}

export { Terminal, TerminalCommand }
