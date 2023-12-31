import Link from "next/link";

export default function Navbar() {
    return <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
        <Link className="text-white font-bold" href={"/"}>Quiz Application Backend</Link>
        <div>
            <Link className="bg-white p-2 ml-1" href={"/addQuestion"}>Add Questions</Link>
            <Link className="bg-white p-2 ml-1" href={"/addSection"}>Add Category</Link>
        </div>
    </nav>
}