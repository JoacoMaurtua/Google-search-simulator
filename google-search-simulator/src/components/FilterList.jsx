import React from 'react';
import styled from 'styled-components';

const DivList = styled.ul`
  display: inline-block;
  align-items: center;
  width: 400px;
  color: #52188c;
  list-style: none;
  margin-left: 320px;

  li{
    font-size: 15px;
    margin-bottom: -20px;
  }
`

export default function FilterList({wordsGroup, inputWord}) {
  return (

    wordsGroup.map((word,index)=>{
        const start = word.indexOf(inputWord);
        const end = start + inputWord.length;

        return(
          <DivList>
            <li key={index}>
              {word.slice(0,start)}
              <b>{word.slice(start,end)}</b>
              {word.slice(end)}
            </li>
          </DivList>
        )
    })
  )
}


