import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import PageTemplate from './ui/PageTemplate';
import './styles.scss';
import { WatchList } from './routes/watch-list-page/WatchList';

export const App = () => {
  // TODO create router file
  //  1. add router for each page
  //  2. created Nav component
  //  3. for each nav component -> move to modules
  return (
    <div className='App'>
      <header>

        <div className='logo'>Rick & Morty</div>
        <nav>
          <NavLink to='/'>Character</NavLink>
          <NavLink to='/episode'>Episodes</NavLink>
          <NavLink to='/location'>Location</NavLink>
          <NavLink to='/watchList'>Watch list</NavLink>
        </nav>
      </header>
      <Route path='/' exact>
        <PageTemplate page='character' />
      </Route>
      <Route path='/episode' exact>
        <PageTemplate page='episode' />
      </Route>
      <Route path='/location' exact>
        <PageTemplate page='location' />
      </Route>
      <Route path='/watchList'>
        <WatchList />
      </Route>
    </div>
  );
};
