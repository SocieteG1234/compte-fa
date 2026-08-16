import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

const links = [
  { to: '/', label: 'Vue d\'ensemble', end: true },
  { to: '/virement', label: 'Virement' },
  { to: '/transactions', label: 'Transactions' },
  { to: '/profil', label: 'Profil' }
];

export default function Sidebar() {
  const { currentUser, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar__mark">Raiffeisen Banque</div>

      <nav className="sidebar__nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) => `sidebar__link ${isActive ? 'is-active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar__user">
        <p className="sidebar__user-name">{currentUser?.name}</p>
        <p className="sidebar__user-code">{currentUser?.code}</p>
        <button className="sidebar__logout" onClick={logout}>
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
