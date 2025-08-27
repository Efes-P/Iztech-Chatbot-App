import Link from 'next/link'
import { SvgIcons } from './svg-icons'

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-16 px-4 border-b shrink-0 bg-gradient-to-b from-background/10 gap-4 via-background/50 to-background/80 backdrop-blur-xl">
      <Link href="/" className="font-bold flex items-center gap-2 font-heading">
        <SvgIcons.assistantLogo className="h-24" />
      </Link>
      <div className="flex items-center gap-2">
        <SvgIcons.ibbLogo className="h-16" />
        <SvgIcons.iztekLogo className="h-10 w-16" />
        <SvgIcons.izfasLogo className="h-16" />
      </div>
    </header>
  )
}
