import logo from './logo.svg';
import './App.css';


function App() {
  


      const urlAPI = 'https://api.sorare.com/api/v1/users/m_quentin_m@hotmail.fr'
      const urlProxy= 'http://localhost:3001'

      let headers = new Headers();
      headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

      //TEST QUENTIN

      fetch(`${urlProxy}/${urlAPI}`, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      }).then(
        (response) => {
          console.log(response)
        }
      ).catch(
        (error) => {
          console.log(error)
        }
      )
      
      //ANCIENNE VERSION

      fetch(urlAPI, {
        method: 'GET',
        mode: 'cors',
        headers: headers
      }).then(
        async (response) => {
          try {
            const responseJSON = await response.json();
            console.log(responseJSON);
          } catch (error) {
            console.log(error);
          }
        }
      ).catch(
        (error) => {
          console.log(error)
        }
      )
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
