import Link from "next/link";

export default function Navbar() {
    return <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/addQuestion"}>Add Questions</Link>
        <Link href={"/addSection"}>Add Category</Link>
    </nav>
}