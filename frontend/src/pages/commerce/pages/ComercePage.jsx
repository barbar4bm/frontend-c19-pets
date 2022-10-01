import React from 'react'
import {Footer} from "../commons/Footer"
import {Header} from "../commons/Header"
import {Products} from "../Products/Products"
import { Card } from '../components/hero/Card'
import {Hero} from "../components/hero/Hero"
import "../style/main.scss"


export const ComercePage = () => {
  return (
    <>
    <Header/>
    <Hero />
    <Card />
    <Products />
    <Footer/>
    </>
  )
}

