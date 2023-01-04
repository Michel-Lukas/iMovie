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
      const result = await Api.fetchShowDetails(id);
      return result as any;
   } catch (e) {
      console.log(e);
   }
}

async function fetchCast(id: number) {
   try {
      const result = await Api.fetchCreditsShow(id);
      return result.cast as any;
   } catch (e) {
      console.log(e);
   }
}

export default async function ShowDetails({ params }: any) {
   const show = await fetchDetails(params.id);
   const cast = await fetchCast(params.id);

   const {
      name,
      overview,
      production_companies,
      genres,
      first_air_date,
      episode_run_time,
      in_production,
      last_air_date,
      number_of_seasons,
      seasons,
      status,
      poster_path,
      created_by,
   } = show;

   return (
      <>
         {' '}
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
                  <h1 className={styles.title}>{name}</h1>
                  <div className={styles.undertitle}>
                     <p className={styles.release_date}>
                        {first_air_date}
                     </p>

                     <div className={styles.status}>{status}</div>
                     {status === 'Ended' ? (
                        <p className={styles.release_date}>
                           {last_air_date}
                        </p>
                     ) : (
                        ''
                     )}
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
                  Created By:{' '}
                  {created_by.map((dir: any, i: number) => (
                     <>
                        {dir.name}
                        {i + 1 != created_by.length && ', '}
                     </>
                  ))}
               </p>
               <p>Seasons: {number_of_seasons} seasons</p>
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
               <p>In Production: {in_production ? 'Yes' : 'No'}</p>
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
