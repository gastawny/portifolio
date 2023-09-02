import styles from './styles.module.scss'

export function Command({ children, title }: { children: string[]; title: string }) {
  return (
    <div className="tracking-wide md:text-[0.95rem] 2xl:text-xl relative">
      <span className="text-zinc-500">{'> '}</span>
      <span className="text-primaryExtraDark font-medium">cat </span>
      <span className="text-primaryDark">{title}.txt</span>
      {/* <div className={styles['check']}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="0.6em"
          width="0.6em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
        </svg>
      </div> */}
      <div>
        {children.length > 1 && <span className="text-zinc-200">{'['}</span>}
        <div className="flex flex-col md:gap-1 2xl:gap-2 md:my-1 my-2">
          {children.map((child, index) => (
            <p key={index} className="text-gray-400 font-normal">
              {'"' + child + '"' + (index < children.length - 1 ? ',' : '')}
            </p>
          ))}
        </div>
        {children.length > 1 && <span className="text-zinc-200">{']'}</span>}
      </div>
    </div>
  )
}
