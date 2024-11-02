import React from 'react';

const Register = () => {
    //TODO replace icon with svg
    return (  
        <div className="login">
            <div class="flexcenter padtop">
                <div class="flexcol" >

                    <div class="flexcenter">
                        <img src='favicon.ico' class="roselogo"></img>
                    </div>

                    <div class="flexcenter">
                        <h1>Register</h1>
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
                        <p class="footmsg">Already have an account?&#9;<a>SIGN UP</a></p>
                    </div>


                    <div class="flexcenter">

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Register;