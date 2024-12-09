import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "aboutMe",
        path: "/aboutme"
    },
    {
        name: "skills",
        path: "/skills"
    },
    {
        name: "projects",
        path: "/projects"
    },
    {
        name: "contact",
        path: "/contact"
    }
];

export const Nav = () => {
    const pathname = usePathname();
    return <nav>
        {links.map((link, index) =>{
            return <Link href={link.path} key={index}></Link>
        })}
    </nav>
}

