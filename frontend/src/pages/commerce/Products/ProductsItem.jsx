import React, { useState, useEffect } from 'react'

export const ProductsItem = ({ data }) => {
    const [Users, fetchUsers] = useState([])
    const url = 'http://localhost:3000/api/client'
    const getData = () => {
        fetch(url).then((res) => res.json)
            .then((res) => {
                console.log(res);
                fetchUsers(res)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="product_items">{data.map((items) => (
                <div className="box" key={items.id}>
                    <div className="img">
                        <img src={items.cover} alt="" />
                    </div>
                </div>
            ))}</div>

        </>
    )
}
