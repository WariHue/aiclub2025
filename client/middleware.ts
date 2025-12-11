import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {getUser} from "@/util/util";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("user");

  if (await getUser()) {
    return NextResponse.redirect(new URL("/chat", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["//:path*"],
};
