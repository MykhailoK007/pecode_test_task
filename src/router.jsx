import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Characters } from './modules/character';
import { Episodes } from './modules/episode';
import { Locations } from './modules/location';
import { WatchList } from './modules/watch-list';

export const Routes = () => (
  <BrowserRouter>
    <Route path='/' />
    <Route path='/character' component={<Characters />} />
    <Route path='/episode' component={<Episodes />} />
    <Route path='/location' component={<Locations />} />
    <Route path='watch-list' component={<WatchList />} />
  </BrowserRouter>
);
