import React, {useState, useEffect} from 'react';
import Tours from './Tours';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours);
    console.log(newTours)

  }

  const fetchTours = async() => {
    try{
    
    const response =  await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    
  }catch(error){
    setLoading(false);
    console.log(error);
    }
    
    
  }

  useEffect(() => {fetchTours()
  },[]);

  

  if(loading){
    return <main>
      <Loading />
    </main>
  }

  if(tours.length === 0){
    return <main>
        <div className="title">
          <h2>There is no tour left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}

export default App;