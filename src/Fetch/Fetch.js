import React, {useState, useEffect} from 'react'
import bcrypt from 'bcryptjs';
import './Fetch.css'

export function Fetch() {

  const email = 'm_quentin_m@hotmail.fr'
  const password = 'Logapi123'
    

    useEffect(
      () => {
        const urlToFetch = 'http://localhost:3001/api/v1/users/m_quentin_m@hotmail.fr'
        fetch(urlToFetch
          ).then(
            async (response) => {
              try {
                const responseJSON = await response.json();
                return responseJSON.salt
              } catch (error) {
                console.log(error);
              }
            }
          ).then( 
            async (salt) => {
              try {
                console.log(bcrypt.hashSync(password, salt))
                bcrypt.hashSync(password, salt)
              } catch (error) {
                console.log(error);
              }
            }
          )
          .catch(
            (error) => {
              console.log(error)
            }
          )
      }, []
    )
     

      return(
          <div className="fetch">FETCH</div>
      )
}