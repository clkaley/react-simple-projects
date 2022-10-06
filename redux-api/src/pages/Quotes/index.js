import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import {
  fetchAllQuotes,
  selectError,
  selectStatus,
  selectQuotes,
} from "../../redux/quotesSlice";
import {Helmet} from "react-helmet";
function Quotes() {
  const dispatch = useDispatch();
  const data = useSelector(selectQuotes);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  console.log("quotes:", data);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllQuotes());
    }
  }, [dispatch, status]);

  if (error) {
    return <Error message={error} />;
  }
  return (
    <div>
      {status === "loading" && <Loading />}
      <Helmet>
                <meta charSet="utf-8" />
                <title>Quotes</title>
               
            </Helmet>
      {status === "succeeded" &&
        data.map((item) => {
          return (
            <div key={item.quote_id} className="mt-5 m-5">
              <figure className="text-start">
                <Link
                 className="link"
                 to={`/quotes/${item.quote_id}`}>
                <blockquote className="blockquote">
                  <p>{item.quote}</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  {item.author}
                  <cite title="Source Title"></cite>
                </figcaption>
                </Link>
              </figure>

            </div>
          );
        })}
    </div>
  );
}

export default Quotes;
