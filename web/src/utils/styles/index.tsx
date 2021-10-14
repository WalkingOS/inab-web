import React from 'react'
/*import {} from './globals'
import {} from './grid'*/
import { Mixinstypography, Fontfamily } from './typography'
import { Section } from "./grid"
import { Reset } from "./global"

const AllGlobalStyles = () => {
    return (
        <>
            <Reset/>
            <Section/>
            <Mixinstypography/>
            <Fontfamily/>
        </>
    )
}

export default AllGlobalStyles;
