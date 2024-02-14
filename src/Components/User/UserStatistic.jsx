import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/userFetch';
import { STATS_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';

const UserStatistcGraphs = React.lazy(()=> import('./UserStatistcGraphs'));

const UserStatistic = () => {

  const {data, error, loading, request } = useFetch();

  React.useEffect(()=>{
    async function getData(){
      const {url, options} = STATS_GET();
      await request(url,options)
    }
    getData();
  },[request])

  if(error) return <Error error={error}/>
  if(loading) return <Loading/>
  if(data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas"/>
        <UserStatistcGraphs data={data}/>
      </React.Suspense>
    );
  else return null;
}

export default UserStatistic;
