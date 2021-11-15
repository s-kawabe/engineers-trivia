import { ColorThemeButton } from '@/components/ui/unit/ColorThemeButton'

export const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 ml-auto w-full h-20 bg-green-300">
      <div />
      <ColorThemeButton />
    </div>
  )
}
