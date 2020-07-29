import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App.jsx';

const init = () => {
  const movie = {
    name: `The Grand Budapest Hotel`,
    genre: `Drama`,
    year: 20141
  };

  ReactDOM.render(
      <App
        movieName={movie.name}
        movieGenre={movie.genre}
        movieYear={movie.year}
      />,
      document.querySelector(`#root`)
  );
};

init();
