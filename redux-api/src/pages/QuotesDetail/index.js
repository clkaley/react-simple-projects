import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {Helmet} from "react-helmet";
function QuotesDetail() {
  const { quotesID } = useParams();
  console.log("quotesID", quotesID);
  const items = useSelector((state)=>state.quotes.items.find((item) => item.quote_id === Number(quotesID)));

  if(!items){
    return <Navigate to="/quotes"/>
  }
  console.log(items);

  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Quotes</title>
               
            </Helmet>
      <h1 className="text-center mt-5">QUOTE DETAIL</h1>
      <figure className="text-center">
        <blockquote className="blockquote">
          <p>{items.quote}</p>
        </blockquote>
        <figcaption className="blockquote-footer">
          {items.author} <cite title="Source Title">{items.series} - {items.quote_id} </cite>
        </figcaption>
      </figure>
    </div>
  );
}

export default QuotesDetail;
