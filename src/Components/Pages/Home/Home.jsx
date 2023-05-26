import React from 'react'
import { MyCarousel } from '../../Carousel/Carousel'
import News from '../../News/News'
import { TextAreaOne, TextAreaTwo } from '../../TextArea/TextArea'
import Newsletter from '../../Newsletter/Newsletter'

const Home = () => {
  return (
    <>
    <MyCarousel />
    <TextAreaOne />
    <News />
    <Newsletter />
    <TextAreaTwo />
    </>
  )
}

export default Home