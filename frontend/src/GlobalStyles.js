import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

#root {
    display: grid;
    grid-template-rows: 48px auto 48px;
    height: 100%;
}

body {
    margin: 0;
    background: #e3e4e6;
    overflow: hidden;
    height: 100%;
}

main {
    overflow: scroll;
    margin: 0 auto;
}
`
