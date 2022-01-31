import React from 'react';
import styled from 'styled-components';
export default function Header() {
  return <Nav>
          <i className="far fa-question-circle"></i>

          <Title> WORDLE (ES) </Title>
      
          <Options>
              <i className="fas fa-chart-bar"></i>
              <i className="fas fa-cog"></i>
          </Options>
      </Nav>
  
}


const Nav = styled.div`
    top: 0;
    position: absolute;
    padding: 8px;
    width: 30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
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