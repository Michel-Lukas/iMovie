import styles from './Shows.module.css';
import Api from '../../helpers/api';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../helpers/config';

import Link from 'next/link';

async function fetchShows() {
   const shows = await Api.fetchDiscoverShows();
   return shows.results as any[];
}

async function fetchTrending() {
   const trending = await Api.fetchTrendingShows();
   return trending.results as any[];
}

export default async function ShowsPage() {
   const shows = await fetchShows();
   const trending = await fetchTrending();

   return (
      <>
         <div className={styles.wrapper}>
            <h2 className={styles.heading}>Discover Shows</h2>
            <div className={styles.grid}>
               {shows?.map((show) => (
                  <Link href={`/shows/${show.id}`}>
                     <img
                        className={styles.thumb}
                        src={
                           IMAGE_BASE_URL +
                           '/' +
                           POSTER_SIZE +
                           '/' +
                           show.poster_path
                        }
                     />
                  </Link>
               ))}
            </div>
            <div className={styles.section}>
               <h2 className={styles.heading}>Trending</h2>
               <div className={styles.grid}>
                  {trending?.map((show) => (
                     <Link href={`/shows/${show.id}`}>
                        <img
                           className={styles.thumb}
                           src={
                              IMAGE_BASE_URL +
                              '/' +
                              POSTER_SIZE +
                              '/' +
                              show.poster_path
                           }
                        />
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
