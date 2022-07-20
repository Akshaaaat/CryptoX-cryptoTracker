import React, {createContext} from 'react'

const GlobalVariables = (props) => {

    const roundFunc = (n, digits)=>{ //Algorithm to roun of number to requred number of significant figures
      let x=(parseFloat(n)).toPrecision(digits);
      return( x );
    }

  return (
    <div>           {/* We return a Global Context. This can now be used to send multiple contexts via an object*/}
        <GlobalContext.Provider value={{roundFunc}}>
            {props.children}
        </GlobalContext.Provider>

    </div>
  )
}

export default GlobalVariables;

const GlobalContext=createContext(); //Context for exporting roundoff function
export {GlobalContext};