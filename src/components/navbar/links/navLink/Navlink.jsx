"use client";

import Link from 'next/link';
import styles from './navlink.module.css';
import { usePathname } from 'next/navigation';
const Navlink = ({link}) => {
    const pathName = usePathname();
    return (
            <Link href={link.path} className={`${styles.container} ${pathName===link.path && styles.active}`}>
                {link.title}
            </Link>
    )
}

export default Navlink;