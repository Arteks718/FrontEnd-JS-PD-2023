import React, {useState, useEffect} from 'react';
import useDataLoad from '../../hooks/useDataLoad';
import API from '../../Settings/API';
import UserCard from './UserCard';
import Icon from "@mdi/react"
import { mdiArrowRightBoldBox, mdiArrowLeftBoldBox } from '@mdi/js';
import styles from './LoadUsers.module.css'


export default function LoadUsersWithLoadHook(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const {data, isLoading, isError} = useDataLoad(API.loadWithAxios, currentPage);

  const prevPage = () => {
    if(currentPage > 1) setCurrentPage(currentPage -1);
  }
  const nextPage = () => {
    setCurrentPage(currentPage +1);
  }

  return (
    <>
        {isError && <p>Error load</p>}
        <Icon onClick={prevPage} path={mdiArrowLeftBoldBox} size={2}></Icon> 
        <Icon onClick={nextPage} path={mdiArrowRightBoldBox} size={2}></Icon> 
        {isLoading && <h3 className={styles.loadData}>Load user data...</h3>}
        <div className={styles.container}>
            {data.map((u,i) => (
                <UserCard key={i} user={u}/>
            ))}
        </div>
    </>
  )
}