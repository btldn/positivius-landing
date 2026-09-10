
type NavProps = {
  className?: string
}

const NAV_ITEMS = [
  {href: '#about', label: 'About us'},
  {href: '#services', label: 'Services'},
  {href: '#cases', label: 'Use Cases'},
  {href: '#pricing', label: 'Pricing'},
  {href: '#blog', label: 'Blog'},
]

export default function Navigation ({ className }: NavProps) {
  return (
    <div className={`flex justify-between gap-[40px] ${className}`}>
      {NAV_ITEMS.map((navItem) => (
        <a key={navItem.href} href={navItem.href}>{navItem.label}</a>
      ))}
    </div>
  )
}