
const NavBar = () => {
    return (
        <div>
            <nav className="bg-sky-300 p-6 flex justify-between">
                <h6> <span className="text-purple-500">Next</span> Practice</h6>
                <ul>
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