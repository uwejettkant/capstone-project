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
    font-family: 'Roboto', sans-serif;
}

main {
    overflow: hidden;
    margin: 0 auto;
}

h3 { 
font-size: 1.75rem;
    font-weight: 500;
    line-height: 1.5;
}

:root {
    --blured-blue: #91adf1;
    --dark-text: #222222;
    --button-color: #194cda;
    --delete-button:  #f25e5e;
    }
`
