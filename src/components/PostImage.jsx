import React from 'react';
import "./postImage.css"
import React, { useRef, useEffect } from 'react';


const PostImage = () => {
 
    return(
        <>
        <div>
        <div id="content">
            <div id='size'>
            <div id='mention'><p>@csipro.dev</p></div>
            </div>
            <div className='logo'>
            <img src="src/img/logo.png"></img>
            </div>
        </div>
        </div>
        <div>
        <button>
          Convert to JPG
        </button>      
          </div>
        </>
    )
}

export default PostImage