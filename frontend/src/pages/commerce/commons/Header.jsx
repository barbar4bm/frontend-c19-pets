import React , { useEffect, useState } from 'react'
import logo from '../assets/images/logoLetter.jpeg'
import cartimg from '../assets/images/cart.png'
import {BiSearch} from 'react-icons/bi'
import {BsBagCheck} from 'react-icons/bs'
import {RiUser3Line} from 'react-icons/ri'
import {AiOutlineHeart,AiOutlineMenu,AiOutlineClose,AiOutlineDelete} from 'react-icons/ai'
import { navlist } from '../assets/data/data'
import {Link,  useNavigate} from 'react-router-dom'
import { connect ,useDispatch, useSelector } from 'react-redux'
import {DELETE} from '../../../controllers/action'

export const Header = () => {
  window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header")
    header.classList.toggle("active",this.window.scrollY > 100)
  })
  const [mobile,setMobile] = useState(false)
  //sumar articulos al carro
  const getData = useSelector((state) => state.cartReducer.carts)
  console.log(getData);
  const [cartList,setCartList] = useState(false)
  const handleClose =()=>{
    setCartList(null)
  }
  //delete an element 
  const dispatch = useDispatch()
  const delet = (id) => {
    dispatch(DELETE(id))
  }
  //precio total
  const [price,setPrice] = useState(0)

  const totals = () => {
    let price = 0
    getData.map((e,i)=>{
      price = parseFloat(e.price) * e.quantity + price
    })
    setPrice(price)
  }
  useEffect(()=>{
    totals()
  },[totals])
  const navigate =useNavigate()
  const onref = (num) => {
    if (num != 1){
      navigate('/store')}
      else{
        navigate('/login')
      }
  }
  return (
    <>
      <header className='header'>
        <div className="container">
          <nav>
            <div className="toggle">
              <button onClick={()=>setMobile(!mobile)}>
                {mobile? <AiOutlineClose className='close heIcon'/> : <AiOutlineMenu className='open heIcon'/>}
              </button>
            </div>
            <div className="left">
              <img src={logo} alt="" onClick={()=>onref()}></img>

            </div>
            <div className="center">
              <ul className={mobile? 'mobile-nav' : 'menu'}>
                {navlist.map((nav)=> (
                  <li key={nav.id}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="right">

            <div className="right_user">
              <Link to={'/login'}><RiUser3Line className='userIcon heIcon'></RiUser3Line></Link>
            </div>
            <div className="rigth_card">
              <button className='button' onClick={()=> setCartList(!cartList)}>
                <BsBagCheck className='shop heIcon'></BsBagCheck>
                Carrito ({getData.length})
              </button>
              <div className={cartList ? 'showCart' : 'hideCart'}>
                {getData.length ? (
                  <section  className='details'>
                    <div className="details_title">
                      <h3>Foto</h3>
                      <p>Producto</p>
                    </div>
                    {getData.map((e)=>(
                      <div className="details_content">
                        <div className="details_content_img">
                          <Link to={`/cart/${e.id}`} onClick={handleClose}>
                            <img src={e.cover} alt="" />
                          </Link>
                        </div>
                        <div className="details_content_detail">
                          <div className="details_content_detail_price">
                            <p>{e.name.slice(0,20)}...</p>
                            <p>Precio : ${e.price}</p>
                            <p>Cantidad : {e.quantity}</p>
                          </div>
                        </div>
                        <div className="details_content_detail_icon">
                          <i onClick={()=>delet(e.id)}>
                            <AiOutlineDelete />
                          </i>
                        </div>
                      </div>
                    ))}
                    <div className="details_total">
                      <h4>Total : ${price}</h4>
                    </div>
                    <div className="details_comprar">
                      <button className='boton' onClick={()=>navigate(`/checkout`)}><h3 style={{color:"white"}}>Comprar</h3></button>
                    </div>
                  </section>
                ): (
                  <div className="empty">
                    <p>Tu carrito esta vacio</p>
                    <img src={cartimg} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
    )
}

const mapStateToProps = (state) =>{
  return{
    amount : state.amount,
  }
}
connect(mapStateToProps)(Header)

