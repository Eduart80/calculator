import React from "react"


class Adding extends React.Component{
    AddNumbers = (entry1, entry2) =>{
        return entry1 + entry2
    }
    render() {
        return(
        <button color="primary" onClick={()=>{
            return this.AddNumbers(2,2)
        }}>Add</button>
        
        )
    }
    
}
export default Adding