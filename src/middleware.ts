import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const hasToken = req.cookies.has("food-token");
  const isAuthRouter =
    req.url.includes("/login") || req.url.includes("/signUp");

  console.log("hasToken", hasToken);
  console.log("isAuthRouter", isAuthRouter);
  console.log("condição sem token e pagina /", !hasToken && !isAuthRouter);

  if (hasToken && isAuthRouter)
    return NextResponse.redirect(new URL("/", req.url));

  if (!hasToken && !isAuthRouter)
    return NextResponse.redirect(new URL("/login", req.url));
}

export const config = {
  matcher: ["/", "/login", "/signUp"],
};
