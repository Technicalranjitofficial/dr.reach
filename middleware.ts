export { default } from "next-auth/middleware"



export const config = { matcher: ["/user/dashboard/:path*","/doctor/dahsboard/:path*"] }