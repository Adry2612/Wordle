import React from 'react';
import styled from 'styled-components';
export default function Header() {
  return <Nav>
          <Icon className="far fa-question-circle"></Icon>

          <Title> WORDLE (ES) </Title>
      
          <Options>
              <Icon className="fas fa-chart-bar"></Icon>
              <Icon className="fas fa-cog"></Icon>
          </Options>
      </Nav>
  
}


const Nav = styled.div`
    top: 0;
    position: absolute;
    padding: 8px;
    width: 35%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #D5D5D4;
    color: #737372;
`

const Icon = styled.i`
    font-size: 20px;
    color: #737372;
`

const Title = styled.span`
    font-size: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
`

const Options = styled.div`
    & > i:first-child{
        margin-right: 15px;   
    }
`