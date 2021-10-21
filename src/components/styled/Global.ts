import { createGlobalStyle } from 'styled-components'
import img from '../../img/background.jpg'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    background: url(${img}) center center;
    background-size: cover;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right,#332f2e, #000);
      opacity: .7;
      z-index: -99; 
    }
  }
`

export default GlobalStyles
