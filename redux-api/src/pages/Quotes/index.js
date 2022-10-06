import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { fetchAllQuotes,selectError,selectStatus,selectQuotes } from '../../redux/quotesSlice';

function Quotes() {
  const dispatch= useDispatch()
  const data=useSelector(selectQuotes)
  const status=useSelector(selectStatus)
  const error=useSelector(selectError)
  console.log("quotes:",data);



  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchAllQuotes())
    }
  
  },[dispatch,status])


  if(error){
    return <Error message={error}/>
  }
  return (
    <div>
      {status==='loading' && <Loading/>}

      {status==='succeeded' && data.map((item)=>{
        return(
          <div
           key={item.quote_id}>
           <figure className="text-center">
  <blockquote className="blockquote">
    <p>{item.quote}</p>
  </blockquote>
  <figcaption className="blockquote-footer">
    {item.author}<cite title="Source Title"> {item.series}</cite>
  </figcaption>
</figure>
           </div>
        )
      })}
    </div>
  )
}

export default Quotes