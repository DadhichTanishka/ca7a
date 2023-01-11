import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Site(){
    
    const register=()=>{
        <div>
        console.log("hello")
        {/* <div>hello</div> */}
        </div>
        
    }
    const[post,setpost]=useState(null);
    const[searchs,newSearch]=useState("react");
    
    useEffect(()=>{
        const baseURL=`https://www.googleapis.com/books/v1/volumes?q=${searchs}`
        axios.get(baseURL)
        .then((response)=>{
            console.log(response.data.items )
            setpost(response.data.items)
        })
    },[searchs])
    if(post!=null){
        return(
            <div id="main">
                <div id="search">
                    <input id="box" type="Text" placeholder="SEARCH"/>
                    <button onClick={()=>newSearch(document.getElementById("box").value)} >🔍</button>
                    {/* <button onClick={register}>register</button> */}
                   <div id="li"><Link to="/form">register</Link></div> 
                </div>
                <div className="books">
                    {post.map((e)=>
                    <div className="booky">
                    <h1>{e.volumeInfo.title}</h1>
                    {e.volumeInfo.imageLinks?<img src={e.volumeInfo.imageLinks.thumbnail} alt=""></img>: <img src="https://onlinebookclub.org/book-covers/no-cover.jpg"/>}
                    </div>
                    )
                    }
                    
                </div>
            </div>
        )
    }
    
}
export default Site
