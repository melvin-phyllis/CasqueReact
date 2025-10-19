
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import nameuser from './controllers/nameuser';
import Productdetail from './page/Productdetail';


function App() {
  const [name, setName] = useState("")
  return (
    <>
      <div className="container">
        <div className='row  justify-content-center'>
          <div className="col col-lg-5 " >
            <Productdetail />
            <div className='d-flex   align-items-center justify-content-around p-2 '>
              <span className='fs-4'>Bienvenue {name} !</span>
              {!name && <Button onClick={() => (nameuser(setName))} variant="light">Ajouter votre nom </Button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
