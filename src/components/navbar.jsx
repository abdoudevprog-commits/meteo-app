function Searchebar({ville , setVille, onSearch}) { 
    return ( 
        <div className="search-bar"> 
        <input 
        type="text" 
        placeholder="Entrez une ville" 
        value={ville} 
        onChange={(e) => setVille(e.target.value)}  
        onKeyDown={(e) => { e.key === "Enter" && onSearch() }}  
        /> 
        <button onClick={onSearch}>Rechercher</button>
        </div> 
    ); 
} 

export default Searchebar;
        
        
        
        
         
    





