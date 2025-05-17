import { AboutHospital } from '@/components/About/About'
import { AboutFounder } from '@/components/AboutFounder/AboutFounder'
import { Hero } from '@/components/Home/Hero'
import React from 'react'

export default function HomePage() {
  return (
    <div>
      <Hero />
      <AboutHospital />
      <AboutFounder />
    </div>
  )
}
