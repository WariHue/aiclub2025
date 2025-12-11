import Axios from "axios";
import {getCookie, setCookie} from "@/util/cookieUtil";

let user:string;

export const api = Axios.create({ baseURL: 'http://localhost:8000' })

export const setUser = async (str:string) => {
  user = str;
  try {
    const {data} = await api.get("/start", {
        params: {
          q: str,
        },
      })
    await setCookie(data.result)
  }
  finally {
    console.log("!")
  }
}
export const getUser = async ():Promise<string> => {
  console.log(await getCookie('user'))
  return user;
}