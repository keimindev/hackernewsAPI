import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { axiosInstance } from '../shared/api'

import Menu from '../elements/Menu'
import DetailForm from '../components/DetailForm'
import Loader from '../components/Loader'


const Detail = () => {
  const nav = useNavigate()
  const params = useParams()

  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState("")

  //게시물 정보 받아오기
  const getDetailData = () =>{
    axiosInstance.get(`/item/${params.id}.json?print=pretty`)
    .then((res)=>{
      setData(res.data)
      setLoading(true)
    })
    .catch((err) => console.log(err))
  }

  useEffect(() =>{
    getDetailData()
  },[])

  return (
    <>
    {!isLoading ?
    <Loader/>
    : 
    <>
    <Wrap>
        <Btns>
          <Menu _onClick={() => nav(-1)} width="150px;" bg="#5f1d97">Back to List</Menu>
          <Menu _onClick={() => nav(`/`)} width="150px;" bg="#5f1d97">Back to Main</Menu>
        </Btns>
        <Contents>
          <DetailForm data={data} />
        </Contents>
      </Wrap>
    </>}

    </>
  )
}

export default Detail

const Wrap = styled.div`
 padding: 30px 10%;
`

const Btns = styled.div`
 display: flex;
 justify-content: space-between;
 color: #fff;
`

const Contents = styled.div`
 border: 1px solid #5f1d97;
 padding: 0 30px 50px 30px; 
`