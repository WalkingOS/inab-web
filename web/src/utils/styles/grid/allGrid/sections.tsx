

import { createGlobalStyle } from "styled-components";
import { screenSize, device } from "../../../variables/allVariables/breakpoints"


export const Section = createGlobalStyle`

  .section {
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
    clear: both;
  
    &__inner {
     display: block;
     position: relative;
     margin: 0;
     padding: 0;
    
     @media (min-width: ${screenSize.screenXS}) {
      margin: 0 auto;
      width: 40em;
     }
   
     @media ${device.laptop} {
      width: 58em;
     }
   
     @media ${device.desktop} {
      width: ${screenSize.screenL};
     }
    }
  }
`
export default Section
