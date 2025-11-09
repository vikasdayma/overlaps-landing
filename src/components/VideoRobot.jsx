import React from 'react'

const VideoRobot = () => {
  return (
      <div className="flex-1 flex justify-center items-center xl:-mt-16">
          {/* <img
            src="AutomationRobot.png"
            alt="Robot"
            className="animate-on-scroll w-full h-full object-contain drop-shadow-2xl 2xl:max-w-[600px]"
          /> */}
          <video autoPlay loop muted src="https://cdn.pixabay.com/video/2024/05/02/210424_large.mp4"></video>
        </div>
  )
}

export default VideoRobot
