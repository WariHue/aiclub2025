'use client'

import { Input } from '@heroui/input'
import { Button } from "@heroui/button";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Axios from "axios"
import { title, subtitle } from "@/components/primitives";
import {ChatCard} from "@/components/ChatCard";
import { useState, useRef, useEffect } from 'react';
import {Chat} from "@/types";

export default function Home() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState<Chat[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [chats]);

  const api = Axios.create({ baseURL: 'https://aiapi.warihue.dev' })
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);

    if(loading || formData.get("message")==="") return
    try{
      setLoading(true)
      setChats(prev => [...prev, {content:message, sender:false}])
      const { data } = await api.get("/chat", {
        params: {
          q: formData.get("message"),
        },
      })
      console.log(data.result)
      setChats(prev => [...prev, {content:data.result, sender:true}])
      setMessage("")
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <>
      <div className='flex flex-col h-[95%] m-4'>
        <section className="flex-[75%] overflow-y-auto" ref={containerRef}>
          {chats.map((x,i) => (
            <ChatCard Content={x.content} isLeft={x.sender} key={i}/>
          ))}
        </section>
        <div className='relative h-[15px] bg-transparent m-0'>
          <form className="absolute top-2 left-0 w-full flex justify-center" onSubmit={sendMessage}>
            <Input name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='메시지를 입력하세요'/>
            <Button color="primary" className='ml-2' isLoading={loading} type='submit'>Send</Button>
          </form>
        </div>
      </div>
    </>
  );
}
