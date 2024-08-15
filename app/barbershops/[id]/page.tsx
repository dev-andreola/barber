import ServiceItem from "@/app/_components/service-item"
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
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  barbershop.services

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

      <div className="border-b px-5">
        <h2 className="py-5 text-xs font-bold uppercase text-gray-400">
          Sobre nós
        </h2>
        <p className="pb-5 text-justify text-sm">{barbershop.description}</p>
      </div>

      <div className="p-5">
        <h2 className="pb-5 text-xs font-bold uppercase text-gray-400">
          Serviços
        </h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BarbershopPage
