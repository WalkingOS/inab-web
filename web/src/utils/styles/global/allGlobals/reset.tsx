import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
    * {
        box-sizing: border-box;
        border-collapse: separate;
        outline: none;
    }

    *::before,
    *::after {
        box-sizing: border-box;
    }

    body {
        position: relative;
        display: block;
        width: 100%;
        margin: 0;
        padding: 0;
        background: $white;

        &.noscroll {
            overflow: hidden;
        }
    }

    ul, ol {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    main {
        padding-top: $brand-height;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;
    }

    ::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 10px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar
    {
      width: 12px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb
    {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: rgb(202, 192, 192);
    }
`

export default Reset
