import React from 'react'
import styled from 'styled-components'
import { mapTime } from "../shared/utils"


const DetailForm = ({data}) => {
  const {id, title, by, score, time, text, url} = data
  return (
    <>
    <Wrap key={id}>
        <h2>{title}</h2>
        <DataInfo>
            <p><span>By</span> {by}</p>
            <p><span>Score</span> {score}</p>
            <p><span>Posted</span> {mapTime(time)} ago</p>
        </DataInfo>
        <Desc>{text ? text.replace(/<[^>]+>/g, '').replace(/&#x27;/g, '\'').replace(/&#x2F;/g, '/') : ""}</Desc>
        <a href={url}>{url}</a> 
    </Wrap>
    </>
  )
}

export default DetailForm

const Wrap = styled.div`
h2{
  margin-top: 50px;
}`

const DataInfo = styled.div`
 display: flex;
 justify-content: end;
 margin-top: 50px;

 p{
   margin: 0 5px;
   
    span{
    font-weight: 600;
    }
 }
 `

 const Desc = styled.div`
    margin-top: 20px;
    word-break: break-all;
    word-wrap: break-word;
 `