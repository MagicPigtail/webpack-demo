import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  state = {
    hasError: false
  }

  componentDidCatch (error, info) {
    console.info('error', error)
    console.info('info', info)
    this.setState({
      hasError: true,
    })
  }
  
  render() {
    if(this.state.hasError)
    {
      return (
        <div className='error-boundary'>
          <div className='error-boundary_image'>
            <p className='error-boundary__info'>
              Em...this page is missing
            </p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}