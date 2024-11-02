import React from 'react';

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

                    <form method='POST' enctype="application/x-www-form-urlencoded" action="/login">
                        <div class="flexcenter">
                            <input type='text' placeholder='Username'></input>
                        </div>

                        <div class="flexcenter">
                            <input type='text' placeholder='Password'></input>
                        </div>

                        <div class="flexcenter">
                            <button>LOGIN</button>
                        </div>

                    </form>

                    <div class="flexcenter">
                        <p class="footmsg">Don't have an account?&#9;<a href='/register'>SIGN UP</a></p>
                    </div>

                    <div class="flexcenter footmsg">
                        <p class="footmsg">Don't want to register an account?&#9;<a href='/'>GUEST LOGIN</a></p>
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