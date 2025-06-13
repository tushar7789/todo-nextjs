const headerStyle = {
  color : "black",
  width : "100%",
  height : "15vh",
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  fontSize : "2rem",
  // border: "2px solid red",
  background : "rgba(109, 138, 116, 0.5)"
}

const footerStyle = {
  color : "black",
  width: "50%",
  height : "85vh",
  display : "flex",
  flexDirection : "column" as const,
  justifyContent : "center",
  // border : "2px dashed yellow",
  borderLeft : "4px dashed black",
  borderRight : "4px dashed black",
  borderRadius : "20px",
  margin: "auto",
  padding : "1rem",
  fontWeight : "600"
}

const div1Style = {
  display : "block",
  width : "100%",
  height : "90%",
  // border : "2px solid voilet",
  paddingLeft : "1rem",
  paddingRight : "1rem"
}

const div2Style = {
  display : "flex",
  justifyContent : "center",
  alignItems : "center",
  width : "100%",
  height : "10%",
  // border : "2px solid green",
  paddingLeft : "1rem",
  paddingRight : "1rem"
}


const styleList = {headerStyle, footerStyle, div1Style, div2Style};

export default styleList;