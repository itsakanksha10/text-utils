import React from 'react'

export default function Alert(props){
    const capitalize = word => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height:'50px'}}>
            {props.alertObj && <div>
            <div className={`alert alert-${props.alertObj.type} alert-dismissible fade show`} role="alert">
               <strong>{capitalize(props.alertObj.type)}</strong> {props.alertObj.msg}
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>  
        </div>}
        </div>
       
    )
    // if (props.alertObj){
    //     return (
    //         <div></div>
    //     )
    // }
}

// <CustomComponent key1="x" key2="y" key3="z"/>

// function CustomComponent(props){ }
// props = {
//  key1: 'x',
//  key2: 'y',
//  key3: 'z' 
// }
// <div>{props.key1}</div>

// props = {
//  alertObj: {
//      msg: 'Message',
//      type: 'success',
//      color: 'green'
//  }
//}

// props = {alertObj: null}

// const a = props.alertObj ----> {msg: 'Message', type: 'success', color: 'green'}
// props.alertObj.msg = 'Message'
