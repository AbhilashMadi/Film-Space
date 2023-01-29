import React from 'react';
import { useEffect, useContext } from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import {ColorModeContext} from "../utils/ToggleColorMode";

const useAlan = () => {

    const alenAiKey = `${process.env.REACT_APP_ALENAI_KEY}/stage`;
    const {setMode} = useContext(ColorModeContext)
    
useEffect(() => {

  alanBtn({
    key: alenAiKey,
    onCommand: ({command,mode}) => {
      if (command === "changeMode") {
        if(mode === "light"){
            setMode("light");
        } 

        if(mode ==="dark"){
          setMode("dark");
        }
      }
    },
  });
}, []);
}

export default useAlan;