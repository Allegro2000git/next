import Link from "next/link";
import styles from "./Navbar.module.scss"

export const Navbar= () => {
    return (
        <div className={styles.links}>
            <Link href={'/'}>Main</Link>
            <Link href={'/characters'}>Characters</Link>
            <Link href={'/locations'}>Locations</Link>
            <Link href={'/episodes'}>Episodes</Link>
            <Link href={'/test'}>Test</Link>
            <Link href={'/private'}>Private</Link>
        </div>
    );
};