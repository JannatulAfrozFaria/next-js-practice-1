import { NextResponse } from "next/server"

export const middleware = (request) =>{
    return NextResponse.next('/about')
}
export const config = {
    matcher: '/user'
}