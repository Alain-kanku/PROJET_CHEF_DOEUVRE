import React, { useState } from 'react'
import '../css/Login.css'

const Login = () => {
    // varriable d'etat, dans role la valeur par defaut cest etudiant
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('etudiant')
  return (
    <div className="login-page">
        <div className="login-container">
            <h2>Login</h2>
            <div className="form-group">
                <label htmlFor='username'>Username:</label>
                <input type='text' placeholder='Entrer username'/>
            </div>
            <div className="form-group">
                <label htmlFor='password'>Password:</label>
                <input type='text' placeholder='Entrer password'/>
            </div>
            <div className="form-group">
                <label htmlFor='role'>Role:</label>
                <select name='role' id='role'>
                    <option value='decanat'>Decanat</option>
                    <option value='etudiant'>etudiant</option>
                    <option value='directeur'>Directeur</option>
                    <option value='codirecteur'>Codirecteur</option>
                </select>
            </div>
            <button className='btn-login'>Login</button>
        </div>
    </div>
  )
}

export default Login