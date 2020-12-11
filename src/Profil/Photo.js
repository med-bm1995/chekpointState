import React from 'react'
import FullName from './fullName'

function Photo({ img }) {
    return (
        <img className="avatar" src={img} alt="jhon-doe" />
    )
}
export default Photo
