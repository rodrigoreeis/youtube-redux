import React from 'react';
import { Provider } from 'react-redux';
import './styles/normalize.css';
import './styles/reset.css';
import './styles/root.css';
import './App.css';

import store from './store';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

function App() {
  return (
    <Provider store={store}>
      <main className="main" role="main">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </main>
    </Provider>
  );
}

export default App;
