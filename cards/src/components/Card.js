import React from 'react'

function Card() {
 


  return (
    <>
    <h1 className='title'>The Rick and Morty API</h1>
    <div className='wrapper'>
      
        <div className="card">
            <div className="card-body">
                <img src="https://rickandmortyapi.com/api/character/avatar/48.jpeg" alt="" />
                <div className="about">
                    <h4 className='cardTitle'>
                    Black Rick
                    </h4>
                    <button>Details</button>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <img src="https://rickandmortyapi.com/api/character/avatar/54.jpeg" alt="" />
                <div className="about">
                    <h4 className='cardTitle'>
                    Bobby Moynihan
                    </h4>
                    <button>Details</button>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <img src="https://rickandmortyapi.com/api/character/avatar/270.jpeg" alt="" />
                <div className="about">
                    <h4 className='cardTitle'>
                    "Prince Nebulon
                    </h4>
                    <button>Details</button>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-body">
                <img src="https://rickandmortyapi.com/api/character/avatar/392.jpeg" alt="" />
                <div className="about">
                    <h4 className='cardTitle'>
                    Bearded Morty
                    </h4>
                    <button>Details</button>
                </div>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <img src="https://rickandmortyapi.com/api/character/avatar/742.jpeg" alt="" />
                <div className="about">
                    <h4 className='cardTitle'>
                    Bruce Chutback
                    </h4>
                    <button>Details</button>
                </div>
            </div>
        </div>
      
    </div>
    </>
  )
}

export default Card