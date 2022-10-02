import React from 'react'
import { Heading } from '../../commons/Heading'
import { ImQuotesRight } from 'react-icons/im'
import { customer } from '../../assets/data/data'

export const Testimonial = () => {
    return (
        <section className='customer'>
            <Heading title='Cuenta con nosostros' desc='Cuenta con los mejores en el sector en el cuidado de tu regalón.'>
            </Heading>
            <div className="content">
                {customer.map((items) =>
                (
                    <div className="card">
                        <button>
                            <ImQuotesRight />

                        </button>
                        <p>"{items.desc}"</p>
                        <h3>{items.name}</h3>
                        <span>{items.post}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
