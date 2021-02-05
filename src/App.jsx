import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PageTemplate from './ui/PageTemplate';
import './styles.scss';

//TODO
// 1. Add filter on character page
// 2. Fix code structure at episode page

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
        <PageTemplate page='character' />
      </Route>
      <Route path='/episode'>

      </Route>
    </div>
  );
}

export default App;
