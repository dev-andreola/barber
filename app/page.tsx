import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"

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
    </div>
  )
}
