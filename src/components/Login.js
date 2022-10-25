import React, { useState } from 'react'
 
const Login = () => {
    
    const [btnStudentSelected, setBtnStudentSelected] = useState(false);
    const [btnAdminSelected, setBtnAdminSelected] = useState(false);
    const [btnSelected, setBtnSelected] = useState(false);

    const styleBtnStudent = () => {
        setBtnStudentSelected(true);
        setBtnAdminSelected(false);
        setBtnSelected(true);
    }

    const styleBtnAdmin = () => {
        setBtnAdminSelected(true)
        setBtnStudentSelected(false)
        setBtnSelected(true)
    }

    // const userArray = [{username: "admin", password: "password"}]
    // const [user, setUser] = useState(userArray)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault();  
    }

    const displayedText = () => {
        if(!btnSelected){
            return 'Please Choose Student / Admin'
        }
        else if(btnStudentSelected){
            return 'Logging in as Student'
        }
        else if(btnAdminSelected){
            return 'Logging in as Admin'
        }
    }

    return (
        <div> 
            <form onSubmit={handleSubmit}>
                <button type="button" onClick={styleBtnStudent} className={btnStudentSelected ? 'selectedBtn' : 'btn'}>Student</button>
                <button type="button" onClick={styleBtnAdmin} className={btnAdminSelected ? 'selectedBtn' : 'btn'}>Admin</button> <br />

                <div className="row">
                    Username: <input 
                                type="text" 
                                value={username}
                                onChange={({ target }) => setUsername(target.value)}
                              /> <br />
                </div>
                <div className="row">
                    Password: <input 
                                type="text" 
                                value={password}
                                onChange={({ target }) => setPassword(target.value)}
                              /> <br />
                </div>

                <button className={btnSelected ? 'submitBtn' : 'submitBtnDisabled'} type="submit" disabled={btnSelected ? false : true}>Submit</button> <br />
                <p>{displayedText()}</p>
            </form> 
        </div>
    );
}
 
export default Login;