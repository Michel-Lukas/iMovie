import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import {
   AiOutlineSearch,
   AiOutlineUser,
   AiOutlineHeart,
} from 'react-icons/ai';

function Navbar() {
   return (
      <div>
         <div className={styles.navbar__wrapper}>
            <div className={styles.navbar__group}>
               <p className={styles.navbar__title}>iMovie</p>
            </div>
            <div className={styles.navbar__group}>
               <Link href="#" className={styles.navbar__link}>
                  Home
               </Link>
               <Link href="/movies" className={styles.navbar__link}>
                  Movies
               </Link>
               <Link href="/shows" className={styles.navbar__link}>
                  Shows
               </Link>
            </div>
            <div className={styles.navbar__group}>
               <Link href="#" className={styles.navbar__link}>
                  Lists
               </Link>
               <Link href="#" className={styles.navbar__link}>
                  Genres
               </Link>
            </div>
            <div className={styles.navbar__group}>
               <Link href="#" className={styles.navbar__link}>
                  <AiOutlineSearch size={25} />
               </Link>
               <Link href="#" className={styles.navbar__link}>
                  <AiOutlineHeart size={25} />
               </Link>
               <Link href="#" className={styles.navbar__link}>
                  <AiOutlineUser size={25} />
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
