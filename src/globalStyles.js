import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
#root {
    display: grid;
    grid-template-rows: 48px auto 48px;
    height: 100vh;
    background: linear-gradient( 45deg, #8eb8fa, #4287f5);
}
main {
    overflow: scroll;
}

footer {
    display: flex; 
    justify-content: center; 
    align-items: center;
    background: transparent;
}
`;