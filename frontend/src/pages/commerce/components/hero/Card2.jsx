import React from 'react'
import {hero2} from '../../assets/data/data'

export const Card2 = () => {
  return (
    <>
    <section className='cards'>
      {hero2.map((item)=>(
        <div className="card" key={item.id}>
          <div className="left">
            <img src={item.cover} />
          </div>
          <div className="right">
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}
    </section>
    </>
  )
}
