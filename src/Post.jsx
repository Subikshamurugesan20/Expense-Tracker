import React from'react'
import {useParams} from 'react-dom'
function Post(){
    const{id}=useParams()
    return(
        <div> 
        Post:{id}
        </div>
    )
}
export default Post