import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  height: 40px;
  width: 440px;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  height: 34px;
  font-size: 16px;
`;


export default function Input({initialWord,setInitialWord}) {

  return (
    <div>
      <SearchInput type="text" id="words" value = {initialWord} 
        onChange={event=>setInitialWord(event.target.value)}
      />
    </div>
  )
}
