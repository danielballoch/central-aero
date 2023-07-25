import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  min-width: 500px;
  height: 80px;
  background: ${({ theme }) => theme.background};
  border: solid 2px white;
  cursor: text;
  padding-left: 40px;
  margin-right: 72px;
  ${'' /* margin-left: -2.5em;
  padding-left: 2.5em;
  margin-right: -2.5em;
  padding-right: 2.5em; */}

`

const closed = css`
  min-width: 500px;
  height: 80px;
  background: white;
  border: solid 2px white;
  transition: .3s;
  cursor: pointer;
  padding-left: 40px;
  margin-right: 72px;
  ${'' /* margin-left: -2.4em;
  padding-left: 2.4em;
  margin-right: -2.4em;
  padding-right: 2.4em; */}
  :hover {
    cursor: text;
  }
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
    
  .SearchInput {
    outline: none;
    border: ${({ hasFocus }) => (hasFocus ? "none" : "none")};
    font-size: 1.6em;
    transition: 100ms;
    border-radius: 2px;
    font-family: 'segoe ui';
    color: $333;
    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 2em;
    margin: 20px;
    color: white;
    pointer-events: none;
  }
  @media(max-width: 750px){
    min-width: 0;
    transform: scale(.8);
    .SearchInput {
        
    }
  }
`