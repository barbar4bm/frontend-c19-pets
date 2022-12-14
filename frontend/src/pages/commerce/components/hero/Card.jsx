import React from 'react'
import {hero, hero2} from '../../assets/data/data'

export const Card = () => {
  return (
    <>
    <section className='cards'>
      {hero.map((item)=>(
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
