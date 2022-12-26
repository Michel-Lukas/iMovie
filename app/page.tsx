import styles from '../styles/Home.module.css';
import Api from '../helpers/api';
import {
   POSTER_SIZE,
   BACKDROP_SIZE,
   IMAGE_BASE_URL,
} from '../helpers/config';

import Link from 'next/link';

async function fetchTrending() {
   try {
      const trending = await Api.fetchTrendingAll();
      console.log(trending.results[0]);
      return trending?.results as any[];
   } catch (e) {
      console.log(e);
   }
}

async function fetchTopShows() {
   try {
      const topShows = await Api.fetchTopShows();
      return topShows?.results as any[];
   } catch (e) {
      console.log(e);
   }
}

async function fetchTopMovies() {
   try {
      const topMovies = await Api.fetchTopMovies();
      return topMovies?.results as any[];
   } catch (e) {
      console.log(e);
   }
}

async function fetchDiscoverMovie() {
   try {
      const topMovies = await Api.fetchDiscoverMovie();
      return topMovies?.results[0] as any;
   } catch (e) {
      console.log(e);
   }
}

async function fetchDiscoverShow() {
   try {
      const topMovies = await Api.fetchDiscoverShows();
      return topMovies?.results[0] as any;
   } catch (e) {
      console.log(e);
   }
}

export default async function HomePage() {
   const trending = await fetchTrending();
   const topMovie = await fetchTopMovies();
   const topShows = await fetchTopShows();
   const discoverMovie = await fetchDiscoverMovie();
   const discoverShow = await fetchDiscoverShow();

   return (
      <div className={styles.wrapper}>
         <div className={styles.hero}>
            {trending != undefined ? (
               <Link href={`/movies/${trending[0].id}`}>
                  <img
                     src={
                        IMAGE_BASE_URL +
                        '/' +
                        BACKDROP_SIZE +
                        '/' +
                        trending[0].backdrop_path
                     }
                     alt="Hero Banner"
                  />
               </Link>
            ) : (
               <div>Waiting</div>
            )}
         </div>

         <div className={styles.trending__section}>
            <h2 className={styles.heading}>Trending</h2>
            <div className={styles.trending__wrapper}>
               {trending?.slice(1).map((trend) => (
                  <Link
                     href={
                        trend.media_type == 'tv'
                           ? `/shows/${trend.id}`
                           : `/movies/${trend.id}`
                     }>
                     <img
                        className={styles.thumbnail}
                        src={
                           IMAGE_BASE_URL +
                           '/' +
                           POSTER_SIZE +
                           '/' +
                           trend.poster_path
                        }
                     />
                  </Link>
               ))}
            </div>
         </div>

         <div className={styles.discover__section}>
            <div className={styles.discover__wrapper}>
               <Link href={`/movies/${discoverMovie.id}`}>
                  <img
                     className={styles.discover__thumbnail}
                     src={
                        IMAGE_BASE_URL +
                        '/' +
                        POSTER_SIZE +
                        '/' +
                        discoverMovie.poster_path
                     }
                     alt=""
                  />
               </Link>
               <Link href={`/movies/${discoverMovie.id}`}>
                  <img
                     className={styles.discover__thumbnail}
                     src={
                        IMAGE_BASE_URL +
                        '/' +
                        POSTER_SIZE +
                        '/' +
                        discoverShow.poster_path
                     }
                     alt=""
                  />
               </Link>
            </div>
         </div>
      </div>
   );
}
