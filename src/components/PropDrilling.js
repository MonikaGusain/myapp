import React, { useState } from 'react'

let context = React.createContext(null);
function PropDrilling(){
    const [fName, setFName] = useState("Monika");
    const [lName, setLName] = useState("Gusain");

    return(
        <>
        <context.Provider value ={{fName, lname}}>
        <div>
        <childA/>   
        {/* <childA fName={fName} lName={lName}/> */}
        </div>
        </context.Provider>
        
        </>
    )
}

function childA({fName, lName}){
    return(
        <>
        <childB/>
        {/* <childB fName={fName} lName={lName}/> */}
        </>
    )

}

function childB({fName, lName}){
    return(
        <>
        <div>
            <h4>{fName}</h4>
            <h4>{lName}</h4>
        </div>
        </>
    )

}
export default PropDrilling
