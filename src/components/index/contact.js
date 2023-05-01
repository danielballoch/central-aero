import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
display: flex;
height: 600px;
display: flex;
align-items: center;
background-color: #f7faff;
div {
    margin-left: 400px;
    width: 660px;
    font-family: 'Helvetica';
    h2 {
        font-size: 65px;
    }
    hr {
        width: 120px;
        margin-left: 0;
    }
    p {
        font-size: 24px;
    }
    a {
        font-size: 20px;
        color: #333333;
        text-decoration: none;
      
    }
}
.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 6px;
  margin-left: 20px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
`

export default function Hero(){
    return(
        <Wrapper>
            <div>
                <h2>Get In Touch</h2>
                <hr/>
                <p>Talk to people that live and breathe aviation.<br/>
                We have a wide range of parts and services and are also happy to advise on any aircraft problem your trying to solve.</p>
                <a href="/contact">LET'S TALK <i class="arrow right"/></a>
            </div>
        </Wrapper>
    )
}