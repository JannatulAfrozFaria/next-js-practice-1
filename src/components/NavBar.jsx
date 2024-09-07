import Link from "next/link";

const NavBar = () => {
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
    return (
        <div>
            <nav className="bg-sky-600 p-6 flex justify-between">
                <h6 className="text-3xl text-sky-200"> <span className="text-purple-200">Next</span> Practice</h6>
                <ul className="flex gap-4 text-white">
                    {
                        links?.map((link)=> <Link></Link> )
                    }
                    {links}
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;