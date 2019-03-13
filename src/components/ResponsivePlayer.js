import React from 'react'
import ReactPlayer from 'react-player'
import "../components/layout.css"

class ResponsivePlayer extends React.Component {
    render () {
        return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            preload="true"
            playing={true}
            muted
            autoPlay={true}
            url={require('../images/harrySiteDemo.mp4')}
            width='100%'
            loop
            />
        </div>
        )
    }
}
export default ResponsivePlayer