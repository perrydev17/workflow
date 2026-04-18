import Link from "next/link";

const SidebarLogo = () => {
  return (
    <Link href="/workflow" className="flex items-center gap-1">
      <div className="bg-primary size-7 rounded-sm">
        Flow
      </div>
    </Link>
  )
}

export default SidebarLogo