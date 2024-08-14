import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <Image
          src={barbershop.imageUrl}
          fill
          alt={`Imagem de capa ${barbershop.name}`}
          className="object-cover"
        ></Image>
        <Button
          asChild
          className="absolute left-4 top-4"
          variant={"secondary"}
          size={"icon"}
        >
          <Link href={"/"}>
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          className="absolute right-4 top-4"
          variant={"secondary"}
          size={"icon"}
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="space-y-2 border-b p-5">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <div className="flex items-center gap-1">
          <MapPinIcon size={18} className="text-primary" />
          <p className="text-sm">{barbershop.address}</p>
        </div>
        <div className="flex items-center gap-1">
          <StarIcon size={18} className="text-primary" />
          <p className="text-sm">5,0 (231 avaliações)</p>
        </div>
      </div>

      <div className="space-y-3 border-b p-5">
        <h3 className="text-sm font-bold uppercase text-gray-400">Sobre nós</h3>
        <p className="text-justify text-sm">{barbershop.description}</p>
      </div>
    </div>
  )
}

export default BarbershopPage
