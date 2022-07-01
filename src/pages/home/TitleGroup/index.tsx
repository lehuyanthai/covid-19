import React from 'react'

import './styles.scss'

interface ITilteGroup {
    title:string,
    subTitle : string
}

const TitleGroup = ({title,subTitle}:ITilteGroup) => {
  return (
    <div className='title-group'>
        <div className='title-group__title'>{title}</div>
        <div className='title-group__sub-title'>{subTitle}</div>
    </div>
  )
}

export default TitleGroup