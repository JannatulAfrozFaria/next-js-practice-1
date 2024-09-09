import { NextResponse } from "next/server"

export const middleware = (request) =>{
    if(request.url === '/about'){
        return NextResponse.redirect(new URL('/contact',request.url))
    }
    
    //redirect changes the url and content
    //rewrite changes the content but does not change the url path name
}
export const config = {
    // matcher: '/about'
    //redirect can be used for multiple pages as below with [ ] and comma(,)
    //  matcher: ['/about','/service']
}