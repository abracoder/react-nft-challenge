import React, { useState,useEffect } from 'react'
import './Main.css'
import instagramLogo from '..//assets/owner/instagram.png'
import twitterLogo from '..//assets/owner/twitter.png'
import moreIcon from '..//assets/owner/more.png'


const Main = ({punkListData,selectedPunk}) => {
    // console.log(activePunk);
    console.log(punkListData)
    const [activePunk,setActivePunk]=useState(punkListData[0])
    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk]);
    },[punkListData,selectedPunk])


return (
    <div className='main'>
        <div className="mainContent">
            <div className="punkHighlight">
                <div className="punkContainer">
                    <img src={activePunk.image_url} className="selectedPunk" />
                </div>
            </div>
            <div className="punkDetails" style={{color:'#fff'}}>
                <div className="title">
                    {activePunk.name}
                    <span className='itemNumber'>*#{activePunk.token_id}</span>
                </div>
                
            
            <div className="owner">
                <div className="ownerImageContainer">
                    <img src={activePunk.image_url} alt="" />
                </div>
                <div className="ownerDetails">
                    <div className="ownerNameAndHandle">
                        <div>{activePunk.owner.address}</div>
                        <div className='ownerHandle'>@suraj_gupta432</div>
                    </div>
                    <div className="ownerLink">
                        <img src={instagramLogo} alt="" />
                    </div>
                    <div className="ownerLink">
                        <img src={twitterLogo} alt="" />
                    </div>
                    <div className="ownerLink">
                        <img src={moreIcon} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main