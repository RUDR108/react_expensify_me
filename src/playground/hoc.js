import React from 'react';
import ReactDOM from 'react-dom';


const Info=(props)=>{
    return(
        <div>
    <h1>This is a info.</h1>
    <p>The info is:{props.info}</p>
    </div>
    );
};

const withAdminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
        {props.isAdmin && <p>This is private.</p>}
        <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication=(Wrapped)=>{
    return (props)=>(
        <div>
        {props.isAuthenticated && <p>This is Authenticated.</p>}
        <Wrapped {...props}/>
        </div>
    );
};


// const requireAuthentication=(WrappedComponent)=>{
//     return (props)=>(
//         <div>
//         {props.isAuthenticated?( <WrappedComponent {...props}/>):
//     (<p>Please login to see details.</p>)
//     }
       
//         </div>
//     );
// };

//const AuthInfo=requireAuthentication(Info);
const AdminInfo=withAdminWarning(Info);
const AuthInfo=requireAuthentication(AdminInfo);

ReactDOM.render(<AuthInfo isAuthenticated={true} isAdmin={true} info="This is details."/>,document.getElementById('app'));