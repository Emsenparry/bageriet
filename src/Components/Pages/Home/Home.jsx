import React from 'react'
import { MyCarousel } from '../../Carousel/Carousel'
import News from '../../News/News'
import { TextAreaOne } from '../../TextArea/TextArea'
import Newsletter from '../../Newsletter/Newsletter'

const Home = () => {
  return (
    <>
    <MyCarousel />
    <TextAreaOne />
    <News />
    <Newsletter />
    </>
  )
}

export default Home