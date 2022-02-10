import React from "react";
import "./login.css"


const Login = () =>{
    return(
        <>
        <div className="LContainer">
            <div className="CTA">
                <img src="/images/cta-logo-one.svg" alt="" />
                <a>GET ALL THERE</a>
                <p className="Ldescription">
                Hey this is sworup paudel who is intrested in web development
                and app development and some of my favourites languages are java, 
                javascript(React) and Learning android programming.
                </p>
            <img src="/images/cta-logo-two.png" style={{alignItems:"center", marginLeft:"12px"}} alt="" />

            </div>
        </div>
        </>
    )
}

export default Login;