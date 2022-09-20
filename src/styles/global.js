import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Nunito", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    :root {
        --light-blue: #a39bf0;
        --medium-blue1: #7a74bc;
        --medium-blue-2: #645ea4;
        --medium-blue-3: #544cb1 ;
        --dark-blue: #140c4c;

        --error: #DB4C25;
        --success: #6BDB32;
    }

    ::-webkit-scrollbar {
        width: 7px;
        padding: 0 2px;
    }
    ::-webkit-scrollbar-track {
        background-color:  #ffffff00 ;
    }
    ::-webkit-scrollbar-thumb {
        /* background: var(--blue); */
        border-radius: 10px;
    }
    
    button {
        cursor: pointer;
    }
`;
