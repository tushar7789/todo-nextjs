const listitemStyle = {
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center",
    width : "100%",
    height : "2rem",
    // border : "2px red solid",
    borderBottom : "2px black solid",
    fontSize : "20px",
    marginTop: "30px",
    paddingBottom : "20px"
} 

const addtaskStyle = {
    width : "100%",
    display : "flex",
    justifyContent : "space-between",
    alignItems : "center"
}

const inputStyle = {
    textDecoration : "none",
    width : "85%",
    height : "2rem",
    background : "rgba(135, 135, 119, 0.2)",
    outline : "None",
    color : "white",
    fontSize : "20px"
}

const checkBoxStyle = {
    width: "20px",
    height: "20px",
    paddingRight : "40px"
}

const styleList = {listitemStyle, addtaskStyle, inputStyle, checkBoxStyle}

export default styleList;