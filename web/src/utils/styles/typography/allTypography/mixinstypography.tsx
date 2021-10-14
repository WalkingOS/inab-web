import { createGlobalStyle } from "styled-components";

const Mixinstypography = createGlobalStyle`

    @mixin typography($font-size, $font-variation, $font-style: none) {
        font-family: $font-family;
        font-size: em($font-size);
        font-weight: initial;
        direction: ltr;

            @if $font-variation == thin {
                font-variation-settings: "wght" 250, "wdth" 100;

                @media screen {
                    font-weight: 200;
                }
            }

            @else if $font-variation == regular {
                font-variation-settings: "wght" 400, "wdth" 100;

                @media screen {
                    font-weight: 400;
                }
            }

            @else if $font-variation == bold {
                font-variation-settings: "wght" 700, "wdth" 100;

                @media screen {
                    font-weight: 700;
                }
            }

            @else if $font-variation == extraBold {
                font-variation-settings: "wght" 800, "wdth" 100;

                @media screen {
                    font-weight: 800;
                }
            }
    }
`

export default Mixinstypography