export function Technology({ technology }: { technology: string }) {
  return (
    <div className="flex items-center justify-center w-auto gap-1 rounded-lg bg-secondaryDark/20 px-2 py-1">
      <img
        alt={`${technology} image`}
        className="w-[1.12rem] 2xl:w-[1.4rem] h-[1.12rem] 2xl:h-[1.4rem]"
        src={`/assets/technologies/${technology}.svg`}
      />
      <h3 className="text-[0.8rem] 2xl:text-base tracking-wider font-medium text-[#9c8aff]">
        {technology}
      </h3>
    </div>
  )
}
