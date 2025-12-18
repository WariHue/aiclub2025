'use client'

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react"

export const ChatCard: React.FC<{ Content:string, isLeft: boolean }> = ({Content, isLeft}) => {

  let color: string = ''
  let name: string = ''

  if (isLeft) {
    name = '제니'
    return (
      <>
        <div className='flex items-center mb-0.5'>
          <Image src='/icon.png' className='rounded-4xl size-12 align-baseline mr-1'/>
          <div className=''>{name}</div>
        </div>
        <Card className={"max-w-max items-center bg-gray-400 mb-2 shadow-none"}>
          <CardBody>
            <p>{Content}</p>
          </CardBody>
        </Card>
      </>
    );
  } else {
    name = '당신'
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
}