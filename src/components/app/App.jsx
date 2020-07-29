import React from 'react';
import Main from '../main/Main.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {movieName, movieGenre, movieYear} = props;
  return <Main
    name={movieName}
    genre={movieGenre}
    year={movieYear}
  />;
};

export default App;
