import React, {Component} from 'react';
import jsonResponse from '../data.js';
import logo from './Twitter_Logo_Blue.svg';

class HashtagResults extends Component {
    render(){
        return(
            <div>                
                {jsonResponse.statuses.map((postDetail, index)=>{                    
                    return <li key={index}>
                                <div className="tweet" key={index}>
                                    <span className="screen_name">
                                    <img src={logo}
                                    alt="twitter logo"
                                    height="35px" 
                                    width="30px"
                                    />
                                    {postDetail.user.screen_name} tweeted:</span> 
                                    {postDetail.text}
                                </div>
                            </li>                        
                })}            
            </div>
        )
    }
}

export default HashtagResults;