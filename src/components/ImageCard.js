import React, { useEffect, useReducer } from 'react';
import brux from '../data/images/bruxelles.jpg';
import nam from '../data/images/namur.jpg';
import anv from '../data/images/anvers.jpg';
import lie from '../data/images/liege.jpg';
import bru from '../data/images/bruges.jpg';
import tou from '../data/images/tournai.jpg';
import gan from '../data/images/gand.jpg';

const arrImages = [brux, nam, anv, lie, bru, tou, gan];
const nomVilles = [
  'Bruxelles',
  'Namur',
  'Anvers',
  'Liege',
  'Bruges',
  'Tournai',
  'Gand',
];

const initialState = { count: 1 };

const changeCount = (state, action) => {
  switch (action.type) {
    case 'ajouter':
      return { count: state.count + 1 };
    case 'diminuer':
      return { count: state.count - 1 };
    default:
      throw new Error('this action is not supported');
  }
};

const ImageCard = (props) => {
  /*const [counter, setCounter] = useState(0);*/

  const [state, dispatch] = useReducer(changeCount, initialState);

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 37) {
        dispatch({ type: 'diminuer' });
      }
      if (e.keyCode === 39) {
        dispatch({ type: 'ajouter' });
      }
    });
  }, []);

  if (state.count < 0) {
    state.count = 6;
  }
  if (state.count > 6) {
    state.count = 0;
  }

  const increment = () => {
    dispatch({ type: 'ajouter' });
    if (state.count >= arrImages.length - 1) {
      state.count = 0;
    }
  };
  /*   let {passCounter} = props // destructuration objet , on aurait pu ne pas le noter et mettre directement props.passCounter(state.count) dans le useEffect juste en dessous
    useEffect(() => {
        passCounter(state.count)
    }, []);*/
  useEffect(() => {
    props.passCounter(state.count);
  }, [state.count, props]);

  console.log(state.count);

  const decrement = () => {
    dispatch({ type: 'diminuer' });
    if (state.count === 0) {
      state.count = arrImages.length - 1;
    }
  };

  return (
    <div className="divCentrale">
      <button onClick={decrement}>Precedent</button>
      <div>
        <img alt="ville" className="cadre" src={arrImages[state.count]} />
        <h1 style={{ marginTop: 50, color: 'black' }}>
          {nomVilles[state.count]}
        </h1>
      </div>
      <button onClick={increment}>Suivant</button>
      <br />
    </div>
  );
};

export default ImageCard;
