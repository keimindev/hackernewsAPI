import React from 'react'
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoadBox>Loading...</LoadBox>
  )
}

export default Loader


const LoadBox = styled.div`
color: #5f1d97;
font-size: 40px;
font-weight: 600;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`