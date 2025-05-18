import { AboutHospital } from '@/components/About/About'
import { AboutFounder } from '@/components/AboutFounder/AboutFounder'
import { ContactUs } from '@/components/ContactUs/ContactUs'
import { Hero } from '@/components/Home/Hero'
import { MissionVision } from '@/components/MissionVision/MissionVision'
import TeamSection from '@/components/TeamSection/TeamSection'
import { WhoWeAre } from '@/components/WhoWeAre/WhoWeAre'
import { WhyWeExist } from '@/components/WhyWeExist/WhyWeExist'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutHospital />
      <AboutFounder />
      <WhoWeAre />
      <WhyWeExist />
      <ContactUs />
      <TeamSection />
      <MissionVision />
    </div>
  )
}
