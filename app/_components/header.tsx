import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/quick-search-option"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card className="rounded-t-none">
      <CardContent className="flex items-center justify-between p-5">
        <Image src={"/logo.png"} height={18} width={120} alt="FSW Barber" />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>

            <div className="flex items-center gap-3 border-b py-5">
              <Avatar>
                <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></AvatarImage>
              </Avatar>

              <div>
                <p className="font-bold">Vitor Andreola</p>
                <p className="text-xs text-gray-400">vitor@andreola.io</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-b py-5">
              <SheetClose asChild>
                <Button asChild className="justify-start gap-2">
                  <Link href="/">
                    <HomeIcon size={18} />
                    Início
                  </Link>
                </Button>
              </SheetClose>
              <Button variant={"ghost"} className="justify-start gap-2">
                <CalendarIcon size={18} />
                Agendamentos
              </Button>
            </div>

            <div className="flex flex-col gap-2 border-b py-5">
              {quickSearchOptions.map((option) => (
                <Button
                  key={option.imageUrl}
                  className="justify-start gap-2"
                  variant={"ghost"}
                >
                  <Image
                    src={option.imageUrl}
                    height={18}
                    width={18}
                    alt={`Ícone ${option.title}`}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            <div className="py-5">
              <Button variant={"ghost"} className="w-full justify-start gap-2">
                <LogOutIcon size={18} />
                Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
