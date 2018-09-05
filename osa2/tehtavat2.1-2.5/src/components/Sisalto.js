import React from 'react'
import Osa from './Osa'

const Sisalto = ({kurssi}) => {
    return(
      <div>
        {kurssi.map(kurs => <Osa key={kurs.id} kurs={kurs} />)}
      </div>
    )
  }

  export default Sisalto