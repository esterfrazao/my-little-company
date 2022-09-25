import { Input } from "@chakra-ui/react";
import style from "styled-components";

export const CustomInput = style(Input)`
    color: var(--dark-blue);
    
    ::placeholder {
       color: var(--chakra-colors-whiteAlpha-600);
    }
`;
