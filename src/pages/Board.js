import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components"
import { category } from "../shared/utils"
import { axiosInstance } from '../shared/api'

import Menu from '../elements/Menu';
import Loader from '../components/Loader';

function Board() {
  const nav = useNavigate();
  const params = useParams()

  const [isLoading, setLoading] = useState(false)
  const [keyword, setKeyword] = useState(params.id)
  const [data, setData] = useState([])

  //카테고리별 데이터 리스트 받아오기
  const getList = () => {
    axiosInstance.get(`/${keyword}.json?print=pretty`)
    .then((res) => {
      //내림차순 정렬
      const list = res.data.sort((a,b) => b - a) 
      setData(list)
      setLoading(true)
     }
    )
    .catch((err)=> console.log(err))
  }

  useEffect(() =>{
    getList()
  },[keyword])
 
  return (
    <>
    {!isLoading ? 
    <Loader/>
    : 
    <>
      <Categories>
        {category.map((cate) => {
            return(
            <Menu
             key={cate.id}
             bg="#5f1d97"
             weight={params.id === cate.name ? "600" : ""}
             _onClick={() => {
              setKeyword(cate.name)
              nav(`/board/${cate.name}`)
            }}>{cate.name[0].toUpperCase() + cate.name.slice(1)}</Menu>
            )
        })}
      </Categories>
      <List>
        {data.map((el,idx) => {
            return (
                <Menu
                  key={idx}
                  _onClick={() => nav(`/detail/${el}`)}
                  >{el}
                </Menu>
            )
        })}
      </List>
      </>
    }


    </>
  )
}

export default Board

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 5px;
  color: #fff;
`

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #5f1d97;
`
