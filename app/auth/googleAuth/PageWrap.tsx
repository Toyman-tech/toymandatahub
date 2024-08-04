"use client"
import LoadingPage from '@/components/LoadingPage'
import SnackbarComp from '@/components/Toast'
import useGoogleAuth from '@/lib/useGoogleAuth'
import React from 'react'

const PageWrap = () => {
    const { snackBarOpen, setSnackBarOpen, handleSnack} = useGoogleAuth()
  return (
   <React.Fragment>
    <LoadingPage/>
       <SnackbarComp
        snackBarOpen={snackBarOpen}
        setSnackBarOpen={setSnackBarOpen}
        alert={handleSnack.alert}
        message={handleSnack.message}
      /> 
   </React.Fragment>
  )
}

export default PageWrap