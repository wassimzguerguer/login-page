
import '../style/App.css'

const Login = ({onClick ,inputEmail,setInputEmail,inputPassword,setInputPassword }) => {
    
    

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={inputEmail}
          placeholder="Enter your email here"
          onChange={(ev) => setInputEmail(ev.target.value)}
          className={'inputBox'}
        />
       
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={inputPassword}
          placeholder="Enter your password here"
          onChange={(ev) => setInputPassword(ev.target.value)}
          className={'inputBox'}
        />
      
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login