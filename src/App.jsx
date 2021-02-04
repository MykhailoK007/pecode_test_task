import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PageTemplate from './ui/PageTemplate';
import './styles.scss';

function App() {
  return (
    <div className='App'>
      <header>
        <div className='logo'>Rick & Morty</div>
        <nav>
          <NavLink to='/'>Character</NavLink>
          <NavLink to='/episode'>Episodes</NavLink>
        </nav>
      </header>
        <Route path='/' exact>
          <PageTemplate />
        </Route>
        <Route path='/episode' >
          <PageTemplate />
        </Route>
    </div>
  );
}

export default App;
