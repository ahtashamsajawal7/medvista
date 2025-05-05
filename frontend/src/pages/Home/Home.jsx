import React, { useState } from 'react'
import './Home.css'
// import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import MedicineDisplay from '../../components/MedicineDisplay/MedicineDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState('All')
  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <MedicineDisplay category={category}/>
      {/* <AppDownload/> */}
    </div>
  )
}

export default Home