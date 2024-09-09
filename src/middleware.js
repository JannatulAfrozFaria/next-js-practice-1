import { NextResponse } from "next/server"

const user =  false;
export const middleware = (request) =>{
    // if(request.nextUrl.pathname.startsWith('/about')){
    //     return NextResponse.redirect(new URL('/contact',request.url))
    // }
    if(!user){
        return NextResponse.redirect(new URL('/login',request.url))
    }
    return NextResponse.next();
    
    //redirect changes the url and content
    //rewrite changes the content but does not change the url path name
}
export const config = {
    // matcher: '/about'
    //redirect can be used for multiple pages as below with [ ] and comma(,)
    //  matcher: ['/about','/service']
}