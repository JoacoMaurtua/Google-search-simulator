import React from 'react';

export default function FilterList({wordsGroup, inputWord}) {
  return (

    wordsGroup.map((word,index)=>{
        const start = word.indexOf(inputWord);
        const end = start + inputWord.length;

        return(
          <p key={index}>
            {word.slice(0,start)}
            <b>{word.slice(start,end)}</b>
            {word.slice(end)}
          </p>
        )
    })
  )
}


