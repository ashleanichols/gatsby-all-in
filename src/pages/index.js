import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'

export default () => (
  <LandingLayout>
    <div className='flex flex-col items-center'>
      <Typography.Title className='text-primary-color'>
        Fast in every way that matters
      </Typography.Title>
      <Typography.Title level={4} className='text-gray-600'>
        Gatsby is a free and open source framework based on React that helps
        developers build blazing fast websites and apps
      </Typography.Title>
      <img src='/cover.png' alt='logo' className='mt-10' />
    </div>
  </LandingLayout>
)
