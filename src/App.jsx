import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { PageTemplate } from './ui/PageTemplate';
import './styles.scss';
import { WatchList } from './routes/watch-list-page/WatchList';
import CharacterContainer from './routes/character-page/CharacterContainer';

export const App = () => {
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
        <CharacterContainer />
      </Route>
      {
        //Not working yet
      }
      <Route path='/episode' exact>
        {/*<PageTemplate page='episode' />*/}
      </Route>
      <Route path='/location' exact>
        {/*<PageTemplate page='location' />*/}
      </Route>
      <Route path='/watchList'>
        <WatchList />
      </Route>
    </div>
  );
};
