"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Service",
            path: '/service'
        },
        {
            title: "Port Folio",
            path: '/portfolio'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Contact",
            path: '/contact'
        },
    ]
    const handler = () =>{
        router.push('/login')
    }
    return (
        <div>
            <nav className="bg-sky-600 p-6 flex justify-between items-center">
                <h6 className="text-3xl text-sky-200"> <span className="text-purple-200">Next</span> Practice</h6>
                <ul className="flex gap-4 justify-between items-center text-white">
                    {
                        links?.map((link)=> <Link className={`${pathName === link.path && "text-purple-200 font-semibold" }`} key={link.path} href={link.path} > {link.title} </Link> )
                    }
                </ul>
                <button onClick={handler} className="text-sky-800 bg-blue-200 p-2 rounded-md">Login</button>
            </nav>
        </div>
    );
};

export default NavBar;