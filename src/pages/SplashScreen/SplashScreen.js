import React from 'react'
import RectangleDown from '../../assets/images/rectangle_down.png'
import RectangleUp from '../../assets/images/rectangle_up.png'
import Icon from '../../assets/images/splash_icon.png'



const SplashScreen = () => {

    
  return (
    <div style={{height:'100vh', width:'100vw'}}>
        <img src={RectangleUp} style={{position:'absolute', top:0, width:'100vw', height:'200px'}}/>
        <img src={Icon} style={{margin:'0 auto', display:'block',   position: 'relative',
  top:' 35%',
  transform: 'translateY(-50%)', width:'120px'}}/>
        <img src={RectangleDown} style={{position:'absolute', bottom:0, width:'100vw', height:'400px'}}/>
    </div>
  )
}

export default SplashScreen