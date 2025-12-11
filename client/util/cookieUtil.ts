'use server'

import {cookies} from "next/headers";

export const setCookie = async (usrKey: string) => {
  const cookieStore = await cookies()
  cookieStore.set('user', usrKey)
}

export const getCookie = async (usrKey: string):Promise<string | undefined> => {
  const cookieStore = await cookies()

  return cookieStore.get('user')?.value
}