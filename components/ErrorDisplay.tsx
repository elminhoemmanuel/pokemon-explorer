import React from 'react'

type ErrorDisplayProps = {
    error:string
}

const ErrorDisplay = ({ error }:ErrorDisplayProps) => {
  return (
    <p data-testid="error-message" className='text-red-500 text-center'>{error}</p>
  )
}

export default ErrorDisplay