import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { MenuIcon } from "lucide-react"
import { SheetTrigger, Sheet } from "./ui/sheet"
import { Button } from "./ui/button"
import SidebarSheet from "./ui/sidebar-sheet"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-3">
        <Link href="/">
          <Image alt="NavalhaHub" src="/logo.png" width={160} height={25} />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
