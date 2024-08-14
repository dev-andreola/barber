import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarbershopIcon from "./_components/barbershop-item"

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

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

      <div className="flex gap-3 overflow-x-scroll px-5 pt-5 [&::-webkit-scrollbar]:hidden">
        <Button className="gap-1 px-5" variant={"secondary"}>
          <Image
            src={"/cabelo.svg"}
            alt="Ícone Cabelo"
            width={16}
            height={16}
          />
          Cabelo
        </Button>
        <Button className="gap-1 px-5" variant={"secondary"}>
          <Image src={"/barba.svg"} alt="Ícone Barba" width={16} height={16} />
          Barba
        </Button>
        <Button className="gap-1 px-5" variant={"secondary"}>
          <Image
            src={"/sobrancelha.svg"}
            alt="Ícone Sombrancelha"
            width={16}
            height={16}
          />
          Sombrancelha
        </Button>
        <Button className="gap-1 px-5" variant={"secondary"}>
          <Image
            src={"/acabamento.svg"}
            alt="Ícone Acabamento"
            width={16}
            height={16}
          />
          Acabamento
        </Button>
        <Button className="gap-1 px-5" variant={"secondary"}>
          <Image
            src={"/hidratacao.svg"}
            alt="Ícone Hidratação"
            width={16}
            height={16}
          />
          Hidratação
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
        <h2 className="pb-5 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
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

      <h2 className="p-5 text-xs font-bold uppercase text-gray-400">
        Recomendados
      </h2>
      <div className="flex gap-4 overflow-auto px-5 [&::-webkit-scrollbar]:hidden">
        {barbershops.map((barbershop) => (
          <BarbershopIcon key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      <h2 className="p-5 text-xs font-bold uppercase text-gray-400">
        Populares
      </h2>
      <div className="flex gap-4 overflow-auto px-5 pb-5 [&::-webkit-scrollbar]:hidden">
        {popularBarbershops.map((barbershop) => (
          <BarbershopIcon key={barbershop.id} barbershop={barbershop} />
        ))}
      </div>

      <footer>
        <Card className="rounded-b-none">
          <CardContent className="p-5">
            <p className="text-sm text-gray-400">
              © 2024 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
