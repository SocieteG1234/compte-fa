import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function LoginPage() {
  const { currentUser, login } = useAuth();
  const [code, setCode] = useState('');
  const [passwort, setPasswort] = useState('');
  const [error, setError] = useState('');

  if (currentUser) return <Navigate to="/" replace />;

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const result = login(code, passwort);
    if (!result.success) setError(result.message);
  }

  return (
    <div className="login">
      <div className="login__panel">
        <span className="login__mark">Raiffeisen Banque</span>
        <h1 className="login__title">Connexion</h1>

        <form className="login__form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Identifiant</span>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="ex. marie.sylvia"
              autoComplete="username"
            />
          </label>

          <label className="field">
            <span>Mot de passe</span>
            <input
              type="password"
              value={passwort}
              onChange={(e) => setPasswort(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>

          {error && <p className="login__error">{error}</p>}

          <button type="submit" className="btn btn--primary">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
