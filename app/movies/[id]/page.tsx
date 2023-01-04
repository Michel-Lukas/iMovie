import Api from '../../../helpers/api';
import styles from './Details.module.css';
import { convertMoney } from '../../../helpers/converter';
import {
   POSTER_SIZE,
   BACKDROP_SIZE,
   IMAGE_BASE_URL,
} from '../../../helpers/config';

async function fetchDetails(id: number) {
   try {
      const result = await Api.fetchMovieDetails(id);
      return result as any;
   } catch (e) {
      console.log(e);
   }
}

async function fetchCast(id: number) {
   try {
      const result = await Api.fetchCreditsMovie(id);
      return result.cast as any;
   } catch (e) {
      console.log(e);
   }
}

async function fetchDirector(id: number) {
   try {
      const result = await Api.fetchCreditsMovie(id);
      console.log(
         result.crew.filter((crew: any) => crew.job === 'Director')
      );

      return result.crew.filter(
         (crew: any) => crew.job === 'Director'
      ) as any;
   } catch (e) {
      console.log(e);
   }
}

export default async function MovieDetails({ params }: any) {
   const movie = await fetchDetails(params.id);
   const cast = await fetchCast(params.id);
   const director = await fetchDirector(params.id);

   const {
      title,
      overview,
      budget,
      production_companies,
      genres,
      release_date,
      revenue,
      runtime,
      status,
      poster_path,
   } = movie;

   return (
      <>
         <div className={styles.content}>
            <div className={styles.info__section}>
               <img
                  className={styles.poster}
                  src={
                     IMAGE_BASE_URL +
                     '/' +
                     POSTER_SIZE +
                     '/' +
                     poster_path
                  }
               />
               <div className={styles.info__wrapper}>
                  <h1 className={styles.title}>{title}</h1>
                  <div className={styles.undertitle}>
                     <p className={styles.release_date}>
                        {release_date}
                     </p>
                     <div className={styles.status}>{status}</div>
                  </div>
                  <div>
                     <h2 className={styles.overview__title}>
                        Overview
                     </h2>
                     <p className={styles.overview}>{overview}</p>
                  </div>
               </div>
            </div>
            <div className={styles.general__section}>
               <p>
                  Director:{' '}
                  {director.map((dir: any, i: number) => (
                     <>
                        {dir.name}
                        {i + 1 != director.length && ', '}
                     </>
                  ))}
               </p>
               <p>Runtime: {runtime} minutes</p>
               <p>
                  Production:{' '}
                  {production_companies.map(
                     (company: any, i: number) => (
                        <>
                           {company.name}
                           {i + 1 != production_companies.length &&
                              ', '}
                        </>
                     )
                  )}
               </p>
               <p>
                  Genres:{' '}
                  {genres.map((genre: any, i: number) => (
                     <>
                        {genre.name}
                        {i + 1 != genres.length && ', '}
                     </>
                  ))}
               </p>
               <p>Revenue: {convertMoney(revenue)}</p>
               <p>Budget: {convertMoney(budget)}</p>
            </div>
            <div className={styles.actor__section}>
               {cast?.map((actor: any) => (
                  <div className={styles.actor}>
                     {' '}
                     <img
                        className={styles.actor__picture}
                        src={
                           actor.profile_path
                              ? `${IMAGE_BASE_URL}/${POSTER_SIZE}/${actor.profile_path}`
                              : 'NoImage'
                        }
                     />
                     <h2 className={styles.actor__name}>
                        {actor.name}
                     </h2>
                     <p className={styles.actor__character}>
                        {actor.character}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </>
   );
}
