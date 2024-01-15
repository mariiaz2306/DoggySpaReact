import React from 'react'
import angrydog from '../images/angrydog.svg';
import "../style/FirstSection.css"
import './FirstSection';

export default function FirstSection() {
  return (
      <div className='firstSection'>
          <h1>Trending Spa Package</h1>
          <div className='package_description'>
              <img src={angrydog} alt="" />
              <div className='pack_info'>
                  <h3>Doggy Facial and Fur <br /> Cleanse Treatment <br /> $269</h3>
                  <p>Dogs receive a facial with our vegan, cruelty free face products and cleansing of any dirt left hiding in their beautiful fur (comes with a take home face products and a nimal treats).</p>
                  <button>See More Spa Packages</button>
              </div>
          </div>
    </div>
  )
}
