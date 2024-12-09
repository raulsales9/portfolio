import Link from "next/link";
import { Nav } from "./nav";


const header =  () => {
    return (
        <header className="py-8 text:white">
            <div className="container mx-auto flex justify-between ">
                <div>
                    <Nav/>
                    <Link href="/contact">
                        <a>Hire me</a>
                    </Link>
                </div>
            </div>
        </header>
    )
}