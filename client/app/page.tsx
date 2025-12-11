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
import {redirect} from "next/navigation";
import {getUser, setUser} from "@/util/util";

export default function Home() {

  return (
    <>
      <Button onPress={() => setUser('a')}>a</Button>
      <Button onPress={() => getUser()}>b</Button>
    </>
  );
}
