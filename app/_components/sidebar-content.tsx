import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { Button } from "./ui/button"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/quick-search-option"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"

const SidebarContent = () => {
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b py-5">
        <p className="font-bold">Olá, faça seu login!</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"icon"}>
              <LogInIcon />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%]">
            <DialogHeader>
              <DialogTitle>Faça login na plataforma</DialogTitle>
              <DialogDescription>
                Conecte-se usando sua conta do Google.
              </DialogDescription>
            </DialogHeader>

            <Button variant={"outline"} className="gap-1 font-bold">
              <Image
                src={"/google.svg"}
                width={18}
                height={18}
                alt="Ícone Google"
              ></Image>
              Google
            </Button>
          </DialogContent>
        </Dialog>
        {/* <Avatar>
          <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></AvatarImage>
        </Avatar>

        <div>
          <p className="font-bold">Vitor Andreola</p>
          <p className="text-xs text-gray-400">vitor@andreola.io</p>
        </div> */}
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
  )
}

export default SidebarContent
