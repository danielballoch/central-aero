import styled, { css } from "styled-components"
import SearchResult from "./search-result"

const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 0.5em;
  margin-right: 72px;
  width: 80vw;
  max-width: 500px;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
  background: ${({ theme }) => theme.background};
  @media(max-width: 750px){
    max-width: 300px;
  }
`

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }
    li.ais-Hits-item {
      margin-bottom: 1em;
      a {
        display: block;
        text-align: left;
        width: 100%;
        border: none;
        padding: 0;
        background-color: unset;
        color: ${({ theme }) => theme.foreground};
        h4 {
            margin-top: 0;
            margin-bottom: 0.2em;
        }
      }
    }
  }
  .ais-Snippet {
    text-transform: lowercase !important;
    font-weight: 500;
  }
  .ais-PoweredBy-link {
    background-color: unset;
    border: none;
    padding: 0;
    padding-left: 10px;
  }
  .ais-PoweredBy {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 80%;
    
    svg {
      width: 70px;
    }
  }
  @media(max-width: 750px){
    .Hits {
    li.ais-Hits-item {
      a {
        font-size: 14px;
        h4 {
            font-size: 20px;
        }
      }
    }
  }
  }
`