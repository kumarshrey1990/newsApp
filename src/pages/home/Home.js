import React, {useEffect, useState, useCallback} from 'react';
import TableCommon from '../../shared/components/TableCommon';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/LoadingSpinner';
import Graph from '../../shared/components/Graph';

const Home = props => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [hackerNewsData, setHackerNewsData] = useState(); 
  const tableHeaderText = ["Comments", "Vote Count","News Details"];
  const [pageNumber, setPageNumber] = useState(0)
  useEffect(()=>{
    const serviceCall = () => {
      sendRequest(`${process.env.React_APP_BACKEND_URL}/search?page=${pageNumber}`).then((res)=>{
        setHackerNewsData(res.hits.filter((row)=> row.title && row.url))
      }).catch((err)=>{
        console.log(err)
      })
    }
    serviceCall();
  },[pageNumber])

  const changePage = useCallback((input) => {
    if(input === 'next'){
      setPageNumber((pageCurrent) => pageCurrent+1)
    }else if(input === 'previous'){
      setPageNumber((pageCurrent) => pageCurrent-1)
    }
  }, [])

  console.log(pageNumber)

  return (<React.Fragment>
    {(isLoading || !hackerNewsData) && <div className="center"><LoadingSpinner /></div>}
    {!isLoading && hackerNewsData && 
    <TableCommon 
    records={hackerNewsData} 
    tableHeader={tableHeaderText}
    page={pageNumber}
    changePage={changePage}/>}
    {!isLoading && hackerNewsData && <Graph records={hackerNewsData}/>}
  </React.Fragment>)
}

export default Home