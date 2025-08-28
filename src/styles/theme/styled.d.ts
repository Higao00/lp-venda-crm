import "styled-components"
import { themeDark } from "./themeColors"

declare module "styled-components" {
    export interface DefaultTheme {
        value: boolean
        titleTheme: string

        fonts: {
            light: string
            regular: string
            medium: string
            bold: string
        }

        colors: {
            blue: string
            blueHover: string
            green: string
            greenHover: string
            orange: string
            orangeHover: string
            black: string
            header: string
            lightGray: string
            darkGray: string
            white: string
        }
    }
}
