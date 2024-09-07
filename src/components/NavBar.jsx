import Link from "next/link";

const NavBar = () => {
    return (
        <div>
            <nav className="bg-sky-600 p-6 flex justify-between">
                <h6 className="text-3xl text-sky-200"> <span className="text-purple-200">Next</span> Practice</h6>
                <ul className="flex gap-4 text-white">
                    <Link href={'/about'} >About</Link>
                    <Link href={'/service'} >Service</Link>
                    <Link href={'/portfolio'} >Port Folio</Link>
                    <Link href={'/blogs'} >Blogs</Link>
                    <Link href={'/contact'} >Contact</Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;