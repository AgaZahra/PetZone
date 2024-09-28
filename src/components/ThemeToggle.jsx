import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";


const ThemeTogle = () => {
  const { colorMode, toggleColorMode } = useColorMode(); // Chakra'nın mövzu dəyişdiricisini alırıq

  return (
    <div>
      <p className='icon-mode' onClick={toggleColorMode}>
       {colorMode === "light" ? <IoMdMoon />
 : <IoMdSunny/>}
      </p>
    </div>
  );
};

export default ThemeTogle;
