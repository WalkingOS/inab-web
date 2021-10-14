// media breakpoints: min-width

export const screenSize = {
    screenXS: `380px`,
    screenS: `720px`,
    screenM: `980px`,
    screenL: `1440px`,
    screenLContent: `1920px`
}

export const device = {
    phone: `(min-width: ${screenSize.screenXS})`,
    tablet: `(min-width: ${screenSize.screenS})`,
    laptop: `(min-width: ${screenSize.screenM})`,
    desktop: `(min-width: ${screenSize.screenL})`
}
