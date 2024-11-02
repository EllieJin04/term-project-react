import React from 'react';
import NavBar from './Navbar';

const Login = () => {
    //TODO replace icon with svg
    return (  
        <div className="login">
            <div class="flexcenter padtop">
                <div class="flexcol" >

                    <div class="flexcenter">
                        <img src='favicon.ico' class="roselogo"></img>
                    </div>

                    <div class="flexcenter">
                        <h1>Welcome</h1>
                    </div>

                    <div class="flexcenter">
                        <input type='text' placeholder='Username'></input>
                    </div>

                    <div class="flexcenter">
                        <input type='text' placeholder='Password'></input>
                    </div>

                    <div class="flexcenter">
                        <button>LOGIN</button>
                    </div>

                    <div class="flexcenter">
                        <p class="footmsg">Don't have an account?&#9;<a>SIGN UP</a></p>
                    </div>

                    <div class="flexcenter footmsg">
                        <p class="footmsg">Don't want to register an account?&#9;<a>GUEST LOGIN</a></p>
                    </div>

                    <div class="flexcenter">

                    </div>


                </div>
            </div>
        </div>
    );
}
 
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Login/>
//   </React.StrictMode>
// );

export default Login;