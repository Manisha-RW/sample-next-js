import About from '@/components/About'
import Banner from '@/components/Banner'
import ContactUs from '@/components/ContactUs'
import Faq from '@/components/Faq'
import MoreInfo from '@/components/MoreInfo'
import OurBrand from '@/components/OurBrand'
import OurClient from '@/components/OurClient'
import TopNavbar from '@/components/TopNavbar'
import  React from 'react'

export default function Home() {
  return (
    <div>
      <TopNavbar/>
      <About/>
      <Faq/>
      <Banner/>
      <MoreInfo/>
      <OurBrand/>
      <OurClient/>
      <ContactUs/>
      </div>
  )
}
