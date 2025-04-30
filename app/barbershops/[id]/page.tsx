import Image from "next/image"
import { db } from "@/app/_lib/prisma"
import { Button } from "@/app/_components/ui/button"
import { ChevronLeftIcon, MenuIcon, StarIcon, MapPinIcon } from "lucide-react"
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
      {/* Imagem */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />
        <Button
          size={"icon"}
          variant="secondary"
          className="absolute left-3 top-3 z-50"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>
        <Button
          size={"icon"}
          variant="secondary"
          className="absolute right-3 top-3 z-50"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="border-b border-solid p-4">
        <h1 className="text-sl mb-3 font-bold">{barbershop?.name}</h1>

        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-primary text-primary" size={18} />
          <p className="text-xs font-semibold">4.9 (889 avaliações)</p>
        </div>
      </div>

      <div className="space-y-3 border-b border-solid p-4">
        {/*Descrição*/}
        <h2 className="text-xs font-bold uppercase text-gray-400">SOBRE NÓS</h2>
        <p className="text-justify text-sm">{barbershop?.description}</p>
      </div>
    </div>
  )
}

export default BarbershopPage
