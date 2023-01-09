'use client';

import { useState, useEffect } from 'react';
import styles from './Search.module.css';
import Api from '../../helpers/api';
import Link from 'next/link';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../helpers/config';

function SearchPage() {
   const [search, setSearch] = useState('');
   const [result, setResult] = useState([]);

   const handleChange = (e: any) => {
      e.preventDefault();
      setSearch(e.currentTarget.value);
   };

   useEffect(() => {
      async function fetchMovies() {
         try {
            const data = await Api.fetchSearchAll(search);
            setResult(data.results);
            console.log(result);
         } catch (e) {
            console.log(e);
         }
      }

      fetchMovies();
      setTimeout(() => {}, 750);
   }, [search, setSearch, fetchMovies]);

   async function fetchMovies() {
      try {
         const result = await Api.fetchSearchAll(search);
         console.log(result.results);
         setResult(result.results);
      } catch (e) {
         console.log(e);
      }
   }

   return (
      <div className={styles.content}>
         <h1 className={styles.heading}>Search</h1>
         <div className={styles.search}>
            <input
               className={styles.input}
               type="text"
               placeholder="Star Wars, Iron Man,  ..."
               value={search}
               onChange={handleChange}
            />
         </div>
         <div className={styles.grid}>
            {result?.map((result) => (
               <Link
                  href={
                     result.media_type == 'tv'
                        ? `/shows/${result.id}`
                        : `/movies/${result.id}`
                  }>
                  <img
                     className={styles.thumb}
                     src={
                        IMAGE_BASE_URL +
                        '/' +
                        POSTER_SIZE +
                        '/' +
                        result.poster_path
                     }
                  />
               </Link>
            ))}
         </div>
      </div>
   );
}

export default SearchPage;
