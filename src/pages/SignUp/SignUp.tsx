import logo from '../../assets/logo/logo.png';
import googleIcon from '../../assets/icons/google.png';
import facebookIcon from '../../assets/icons/facebook.png';
import './SignUp.css';
import { Link } from 'react-router-dom';
export default function SignUp() {
  return (
    <section className="signup-page">
      <div className="logo">
        <img src={logo} alt="" />
        <h1 className="signup-title">Melodies</h1>
      </div>
      <div className="signup-form">
        <h2>Sign up to Continue</h2>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <div className="signup-buttons">
            <button>Sign up</button>
          </div>
        </form>
      </div>

      <div className="signup-with-media">
        <div className="google-signup">
          <button>
            <img src={googleIcon} alt="google icon" />
            <span>Google Sign up</span>
          </button>
        </div>
        <div className="facebook-signup">
          <button>
            <img src={facebookIcon} alt="facebook icon" />
            <span>Facebook Sign up</span>
          </button>
        </div>
      </div>
      <div className="have-account">
        <span>Do You Have An Account ?</span>
        <button>
          <Link to="/login">Login</Link>
        </button>
      </div>
    </section>
  );
}
