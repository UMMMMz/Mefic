import React from "react";

const Container = ({children}) => {
  return (
    <>
    <div sx={{width: "95%", marginX: "auto"}} >{children}</div>
    </>
  )
}

export default Container;