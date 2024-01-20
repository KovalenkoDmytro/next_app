import Image from "next/image";
import profilePic from '../../public/access/logo.png'
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Logo(){
    const { locate } = useParams()
    return (
        <Link
        className="navigation__link"
        href={`/${locate}/`}>
            <Image
            className="logo"
            alt="logo"
            width={120}
            height={50}
            src={profilePic}
        />
        </Link>
        
    )  
}