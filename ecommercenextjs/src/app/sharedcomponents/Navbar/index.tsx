"useclient";

// import React,{useState} from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
    // const [searchTerm, setSearchTerm] = useState("");
    // const router = useRouter();

    // const handleSearch = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (searchTerm.trim() !== ""){
    //         router.push(`/search?query = ${searchTerm}`);
    //     }

    

    return(
        <nav className="flex items-center justfy-between px-40 py-7 shadow-md bg-white ">
            {/* <div className="flex items-center gap-12"></div> */}
            
            <div className="ml-5 text-3xl font-bold">Exclusive</div>
            <ul className="flex gap-12 text-gray-700 ml-120 ">
                <li>
                    <Link href="/" className=" hover:underline">Home</Link>
                </li>

                <li>
                    <Link href="/contact" className=" hover:underline">Contact</Link>
                </li>

                <li>
                    <Link href="/about" className=" hover:underline">About</Link>
                </li>

                <li>
                    <Link href="/signup" className=" hover:underline">Sign Up</Link>
                </li>
            </ul>

            <form
            // onSubmit={handleSearch}
            className="flex items-center py-1 bg-gray-100 ml-70  px-3"
            >
                <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 outline-none px-2"
                // value={searchTerm}/
                // onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <FaSearch className="text-gray-500"/>
                </button>
            </form>
        </nav>
    )
};
export default Navbar;