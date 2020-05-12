import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

#root {
    display: grid;
    grid-template-rows: 48px auto 48px;
    height: 100vh;
}

body {
    margin: 0; 
    background: linear-gradient( 45deg, #8eb8fa, #4287f5);
}

main {
    overflow: scroll;
}
`
