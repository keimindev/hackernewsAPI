import React from 'react'
import styled from 'styled-components'


const Menu = (props) => {
  const { _onClick, children, width, bg, weight} = props 
  const styles = {
      width: width,
      bg: bg,
      weight: weight,
  }

  return (
    <BTN onClick={_onClick} {...styles}>{children}</BTN>
  )
}

export default Menu

Menu.defaultProps = {
    onClick: () =>{},
    children: null,
    width: "100%",
    bg: false,
    weight: false,
}

const BTN = styled.div`
   width: ${props => props.width };
   height: 50px;
   line-height: 50px;
   ${(props) => props.weight ? `font-weight: ${props.weight}` : "" };
   ${(props) => props.bg ? `background-color: ${props.bg}`: 'background-color:white'};
   border-radius: 5px;
   text-align: center;
   cursor: pointer;

   &:hover{
       font-weight: 600;
   }
`