import styles from './Movies.module.css';
import Api from '../../helpers/api';
import {
   POSTER_SIZE,
   IMAGE_BASE_URL,
} from '../../helpers/config';

import Link from 'next/link';

async function fetchMovies() {
   const movies = await Api.fetchDiscoverMovie();
   return movies.results as any[];
}

async function fetchUpcoming() {
   const movies = await Api.fetchUpcoming();
   return movies.results as any[];
}

export default async function MoviePage() {
   const movies = await fetchMovies();
   const upcoming = await fetchUpcoming();

   return (
      <>
         <div className={styles.wrapper}>
            <h2 className={styles.heading}>Discover Movies</h2>
            <div className={styles.grid}>
               {movies?.map((movie) => (
                  <Link href={`/movies/${movie.id}`}>
                     <img
                        className={styles.thumb}
                        src={
                           IMAGE_BASE_URL +
                           '/' +
                           POSTER_SIZE +
                           '/' +
                           movie.poster_path
                        }
                     />
                  </Link>
               ))}
            </div>
            <div className={styles.section}>
               <h2 className={styles.heading}>Upcoming</h2>
               <div className={styles.grid}>
                  {upcoming?.map((movie) => (
                     <Link href={`/movies/${movie.id}`}>
                        <img
                           className={styles.thumb}
                           src={
                              IMAGE_BASE_URL +
                              '/' +
                              POSTER_SIZE +
                              '/' +
                              movie.poster_path
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
