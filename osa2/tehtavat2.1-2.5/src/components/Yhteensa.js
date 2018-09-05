import React from 'react'

const Yhteensa = ({osat}) => {
    return(
        <div>
          yhteensä {osat.map(osa => osa.tehtavia).reduce((p, n) => p + n)} tehtävää
        </div>
      )
  }

export default Yhteensa