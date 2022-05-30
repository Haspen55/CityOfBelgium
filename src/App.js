import React, { useState } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import TextCompo from './components/TextCompo';

function App() {
  const [count, setCount] = useState();

  const getCounter = (counter) => {
    setCount(counter);
  };

  return (
    <React.Fragment>
      <ImageCard passCounter={getCounter} />
      <TextCompo compteur={count} />
    </React.Fragment>
  );
}

export default App;

// explication Cleanup useEffect;

/* import React, { useState, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
 */
//Waits for a period of time then resolves , Créer un timer .

/*   function timeout(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
    console.log(timeout)

  useEffect(() => {
    let isCancelled = false;

     console.log(isCancelled);

    const handleChange = async () => {
      //const data = await getdata()
      await timeout(2000); 

      if (!isCancelled) {
        alert(`A name was changed: ${value}`);
      }
    };

    handleChange();
    //Cleanup function is called when useEffect is called again or on unmount
    return () => {
      isCancelled = true;
    console.log('Cleaned up')
    };
  }, [value]);

  return (
    <div className="App">
      <div>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

/* 
explications plus claires  : en tapant sur une touche en rerend le component donc le useeffect se relance et à chaque update ou démontage d un component la fonction cleanUp se lance , donc ici en faisant await timeout(2000)  et en tapant sur une  touche on bloque la continuité du code donc celui ci skip cette partie :  if (!isCancelled) {
        alert(`A name was changed: ${value}`);
      } .
Et passe directement à la cleanUp function où  isCancelled vaut true et de ce fait ne déclenché pas l alert   : A name was changed: ${value} */

/* export default App; */
