"use client"

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
import { signIn, signOut, useSession } from "next-auth/react"
import { Avatar, AvatarImage } from "./ui/avatar"

const SidebarContent = () => {
  const { data } = useSession()

  const handleLoginWithGoogleClick = async () => {
    await signIn("google")
  }

  const handleLogoutClick = async () => {
    await signOut()
  }

  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="border-b py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={data?.user?.image ?? ""}></AvatarImage>
            </Avatar>

            <div>
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs text-gray-400">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
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

                <Button
                  onClick={handleLoginWithGoogleClick}
                  variant={"outline"}
                  className="gap-1 font-bold"
                >
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
          </div>
        )}
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
        <Button
          variant={"ghost"}
          onClick={handleLogoutClick}
          className="w-full justify-start gap-2"
        >
          <LogOutIcon size={18} />
          Sair da conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarContent
