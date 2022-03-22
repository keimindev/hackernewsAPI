import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { category } from '../shared/utils'


const Main = () => {
  const nav = useNavigate();
  return (
    <>
    <Wrap>
      <h1>Hacker News</h1>
      <Category>
        {category.map((cate) => {
          return(
            <List
            key={cate.id}
            onClick={() => nav(`/board/${cate.name}`)}
            >
              {cate.name[0].toUpperCase() + cate.name.slice(1)}
            </List>
          )})}
      </Category>
    </Wrap>
    </>
  )
}

export default Main

const Wrap = styled.div`
padding: 30px 0; 

h1{
  text-align: center;
  margin: 20px 0 50px 0;
  color: #5f1d97;
}
`;

const Category = styled.div`
`;

const List = styled.div`
width: 50%;
height: 80px;
line-height: 80px;
margin: 40px auto;
border-radius: 10px;
background-color: #5f1d97;
color: #fff;
text-align: center;
cursor: pointer;


&:hover{
  font-weight: 600;
}
`