import React from 'react'
import Otsikko from './Otsikko'
import Sisalto from './Sisalto'
import Yhteensa from './Yhteensa'

const Kurssi = ({kurssi}) => {
    return(
        <ul>
            <Otsikko kurssi={kurssi}/>
            <Sisalto kurssi={kurssi.osat} />
            <Yhteensa osat={kurssi.osat}/> 
        </ul>
    )
}

export default Kurssi