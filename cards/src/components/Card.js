import React from 'react'

function Card(props) {
  console.log("props",props);

  return (
    <>
        <div className="card">
            <div className="card-body">
                <img src={props.img} alt="" />
                <div className="about">
                    <h4 className='cardTitle'>
                   {props.name}
                    </h4>
                    <button>Details</button>
                </div>
            </div>   
        </div>
    </>
  )
}

export default Card