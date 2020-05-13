import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

#root {
    display: grid;
    grid-template-rows: 40px auto 54px;
    height: 100vh;
}

body {
    background: linear-gradient( 45deg, #8eb8fa, #4287f5);
    overflow: hidden;
}

main {
    overflow: scroll;
}
`
