import React, { useState } from "react";


const SearchBar =()=>{

    const [term, setTerm]= useState('')
    return(
        <form className="col-md-6">
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
        </form>
    )

}
export default SearchBar;