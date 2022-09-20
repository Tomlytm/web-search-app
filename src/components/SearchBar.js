import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar =()=>{

    const [term, setTerm]= useState('')
    const[results, setResults] = useState([])
    useEffect(()=>{
        const search = async () =>{
           const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params:{
                    action: "query",
                    list: "search",
                    format: "json",
                    origin: "*",
                    srsearch: term
                }

            })
            setResults(data.query.search)
        }
        setTimeout(() => {
            if(term){
           search() 
        }
        }, 1000);
        
        
    }, [term])
        const renderedItems = results.map((item)=>{
            return (
                <div className="content" key={item.pageid}>
                    <a
                        href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        ><h5 className="title">{item.title}</h5></a>
                    <span className="text" dangerouslySetInnerHTML={{__html:item.snippet}}></span>
                    
                    <hr className="style2"></hr>
                </div>
            )
        })
    return(
        <div>
        <div
            className="col-md-6"
            >
            <label for="validationCustom03" className="form-label">Web Search</label>
            <input 
                onChange={(e)=>{setTerm(e.target.value)}}
                value={term}
                type="text" 
                className="form-control" 
                id="validationCustom03" 
                required
                >
            </input>
            <br></br>
    
        </div>
        {renderedItems}
        </div>
    )

}
export default SearchBar;