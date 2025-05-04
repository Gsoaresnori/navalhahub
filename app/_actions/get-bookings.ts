"use server"

import { db } from "../_lib/prisma"
import { startOfDay, endOfDay } from "date-fns"

type GetBookingsParams = {
  date: Date
  barbershopId: string
}

export const getBookings = async ({
  date,
  barbershopId,
}: GetBookingsParams) => {
  return await db.booking.findMany({
    where: {
      date: {
        gte: startOfDay(date),
        lte: endOfDay(date),
      },
      service: {
        barbershopId,
      },
    },
    include: {
      service: true,
    },
  })
}
