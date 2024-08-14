import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"

export default function Home() {
  return (
    <div>
      <Header />

      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Vitor</h2>
        <p>Quarta, 14 de Agosto</p>
      </div>

      <div className="flex items-center gap-2 px-5">
        <Input placeholder="Pesquisa..." />
        <Button>
          <SearchIcon />
        </Button>
      </div>

      <div className="p-5">
        <div className="relative h-[150px] w-full">
          <Image
            src={"/banner-01.png"}
            className="rounded-xl object-cover"
            fill
            alt="Agende nos melhores com FSW Barber"
          />
        </div>
      </div>

      <div className="px-5">
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png"></AvatarImage>
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center border-l px-8">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">14</p>
              <p className="text-sm">09:30</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
