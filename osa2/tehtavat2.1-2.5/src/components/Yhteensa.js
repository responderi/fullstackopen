import React from 'react'

const Yhteensa = ({osat}) => {
    return(
        <div>
          yhteensä {osat.map(osa => osa.tehtavia).reduce((x,y) => x+y)} tehtävää
        </div>
      )
  }

export default Yhteensa