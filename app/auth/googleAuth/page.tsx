import React, { Suspense } from 'react'
import PageWrap from './PageWrap'
import LoadingPage from '@/components/LoadingPage'

const page = () => {
  return (
     <Suspense fallback={<LoadingPage />}>
       <PageWrap></PageWrap>
     </Suspense>
  )
}

export default page