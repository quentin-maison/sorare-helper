import { render } from "@testing-library/react";

export function Fetch() {
    
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

      return(
          <div>FETCH</div>
      )
}