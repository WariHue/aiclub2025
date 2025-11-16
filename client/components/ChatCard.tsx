'use client'

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react"
import { describe } from "node:test";

export const ChatCard: React.FC<{ Content:string, isLeft: boolean }> = ({Content, isLeft}) => {

  let color: string = ''
  let name: string = ''

  if(isLeft){
    name = '제니'
  }
  else{
    name = '당신'
  }
  
  return (
    <>
      <div className=''>{name}</div>
      <Card className={"max-w-max items-center bg-gray-400 mb-2 shadow-none"}>
        <CardBody>
          <p>{Content}</p>
        </CardBody>
      </Card>
    </>
  );
}