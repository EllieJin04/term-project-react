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

                    <form method='POST' enctype="application/x-www-form-urlencoded" action='/register'>
                        <div class="flexcenter">
                            <input name="username" type='text' placeholder='Username'></input>
                        </div>

                        <div class="flexcenter">
                            <input name="password" type='text' placeholder='Password'></input>
                        </div>

                        <div class="flexcenter">
                            <button>SIGN UP</button>
                        </div>
                    </form>

                    <div class="flexcenter">
                        <p class="footmsg">Already have an account?&#9;<a href='/login'>LOGIN</a></p>
                    </div>


                    <div class="flexcenter">

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Register;