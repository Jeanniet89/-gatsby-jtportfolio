import { sharedPreferences } from "../styles/theme"

// breakpoints.lg needs to be cleaned and parsed since it is a string like '1200px'
export const detectMobileAndTablet = windowWidth =>
    windowWidth <
    parseInt(sharedPreferences.breakpoints.lg.match(/\d+/gi).join(""))

// detect server-side-rendering to fix bugs while gatsby build
export const isSSR = typeof window === "undefined"

