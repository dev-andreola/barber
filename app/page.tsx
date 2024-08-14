import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { db } from "./_lib/prisma"
import BarbershopIcon from "./_components/barbershop-item"
import { quickSearchOptions } from "./_constants/quick-search-option"
import BookingItem from "./_components/booking-item"

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
        {quickSearchOptions.map((option) => (
          <Button
            key={option.imageUrl}
            className="gap-2 px-5"
            variant={"secondary"}
          >
            <Image
              src={option.imageUrl}
              alt={`Ícone ${option.title}`}
              width={16}
              height={16}
            />
            {option.title}
          </Button>
        ))}
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

      <BookingItem />

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
