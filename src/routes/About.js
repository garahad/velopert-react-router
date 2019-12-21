import React from 'react'

const About = (props ) => {
    console.log(props)
    return (
      <div>
        {props.match.params.username} 소개
      </div>
    )
}

export default About;
