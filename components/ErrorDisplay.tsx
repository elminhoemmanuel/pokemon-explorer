import React from 'react'

type ErrorDisplayProps = {
    error:string
}

const ErrorDisplay = ({ error }:ErrorDisplayProps) => {
  return (
    <p className='text-red-500 text-center'>{error}</p>
  )
}

export default ErrorDisplay