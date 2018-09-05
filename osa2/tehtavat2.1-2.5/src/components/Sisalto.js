import React from 'react'
import Osa from './Osa'

const Sisalto = ({kurssi}) => {
    return(
      <div>
        {kurssi.map(course => <Osa key={course.id} course={course} />)}
      </div>
    )
  }

  export default Sisalto