import React from 'react'
import Announcement from '../../components/announcements/Announcement'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'
import Slider from '../../components/slider/Slider'

const Home = () => {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Categories />
    </div>
  )
}

export default Home