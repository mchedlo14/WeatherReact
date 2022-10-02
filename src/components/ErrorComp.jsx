import React from 'react'
import '../assets/ErrorComp.css'

const ErrorComp = () => {
  return (
    <div className='error-wrapper'>
      <h2 className='error-text'>Country Not Found</h2>
      <div className='svg-wrapper'>
        <img src='/images/no-results.svg' className='noresult-icon' alt='No result icon'/>
      </div>
    </div>
  )
}

export default ErrorComp