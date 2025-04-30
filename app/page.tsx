import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { Badge } from "./_components/ui/badge"
import { db } from "./_lib/prisma"
import BarbershopItem from "./_components/barbershop-item"

const Home = async () => {
  const barbershops = await db.barbershop.findMany({})
  const popularBarbershops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  return (
    <div>
      {/* header */}
      <Header />

      <div className="p-5">
        {/* Texto */}
        <h2 className="text-xl font-bold">Olá, Gabriel</h2>
        <p>Segunda-feira, 05 de Agosto.</p>

        <div className="mt-6 flex items-center gap-2">
          {/* Busca */}
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        {/* Busca Rapida */}

        <div className="mt-6 flex items-center gap-3 overflow-auto [&::-webkit-scrollbar]:hidden">
          <Button variant="secondary" className="gap-2">
            <Image src="/cabelo.svg" alt="Cabelo" width={16} height={16} />
            Cabelo
          </Button>
          <Button variant="secondary" className="gap-2">
            <Image src="/barba.svg" alt="Barba" width={16} height={16} />
            Barba
          </Button>
          <Button variant="secondary" className="gap-2">
            <Image
              src="/acabamento.svg"
              alt="Acabamento"
              width={16}
              height={16}
            />
            Acabamento
          </Button>
          <Button variant="secondary" className="gap-2">
            <Image
              src="/sobrancelha.svg"
              alt="Sobrancelha"
              width={16}
              height={16}
            />
            Sobrancelha
          </Button>
          <Button variant="secondary" className="gap-2">
            <Image src="/massagem.svg" alt="Massagem" width={16} height={16} />
            Massagem
          </Button>
          <Button variant="secondary" className="gap-2">
            <Image
              src="/hidratacao.svg"
              alt="Hidratação"
              width={16}
              height={16}
            />
            Hidratação
          </Button>
        </div>

        <div className="relative mt-2 h-[165px] w-full rounded-xl">
          {/* Banner */}
          <Image
            src="/banner-01.png"
            fill
            className="object-cover"
            alt="Agende nos melhores com NavalhaHub"
          />
        </div>
        {/* Agendamento */}
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center">
                <Avatar className="h6 w-6">
                  <AvatarImage src="https://utfs.io/f/e995db6d-df96-4658-99f5-11132fd931e1-17j.png" />
                </Avatar>
                <p className="text-sm">Corte de Cabelo</p>
              </div>
            </div>

            {/* Direita */}
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Fevereiro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">09:45</p>
            </div>
          </CardContent>
        </Card>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Populares
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
      <footer>
        <Card>
          <CardContent className="px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2025 Copyright <span className="font-bold">NavalhaHub</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}
export default Home
