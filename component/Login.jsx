import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState([]);
  
  const history = useHistory();

  useEffect(() => {
    const errs = [];
    if (email &&!emailRegex.test(email)) {
      errs.push('Geçerli bir email giriniz');
    }
    if (password &&!passwordRegex.test(password)) {
      errs.push('Şifre güçlü değil');
    }
    setErrors(errs);
  }, [email, password]);

  const isFormValid = errors.length === 0 && email && password && terms;
  function handleSubmit(e) {
    e.preventDefault();
    if (isFormValid) {
       history.push('/success');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Şifre"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={terms}
          onChange={(e) => setTerms(e.target.checked)}
        />
        Şartları kabul ediyorum
      </label>
      {errors.map((err, i) => (
        <p key={i}>{err}</p>
      ))}
      <button disabled={!isFormValid}>Login</button>
    </form>
  );
}
