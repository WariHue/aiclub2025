'use client'

import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@heroui/react"
import { describe } from "node:test";

export const ChatCard: React.FC<{ Content:string, isLeft: boolean }> = ({Content, isLeft}) => {
  return (
    <>
      <Card className={"max-w-max items-center bg-red-200 mb-2 shadow-none"}>
        <CardBody>
          <p>{Content}</p>
        </CardBody>
      </Card>
    </>
  );
}