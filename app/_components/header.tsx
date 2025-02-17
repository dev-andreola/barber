import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Sheet, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import SidebarContent from "./sidebar-content"

const Header = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex items-center justify-between p-5">
        <Image src={"/logo.png"} height={18} width={120} alt="FSW Barber" />

        <Sheet>
          <SheetTrigger>
            <Button size={"icon"} variant={"outline"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SidebarContent />
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
