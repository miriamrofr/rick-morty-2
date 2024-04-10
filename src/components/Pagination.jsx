
function Pagination(props) {
    
    const {setPageNumber,pageNumber,infoCharacters} = props;
    
    let next = ()=>{
        console.log("hola")
       setPageNumber((x) => x+1);
    }

    let prev = ()=>{
        console.log("hola")
        setPageNumber((x) => x-1);
    }
    
  return (
    <div className='container d-flex justify-content-center gap-3 mb-5'>
        <button className="btn btn-secondary" onClick={prev} disabled={pageNumber===1}>Prev</button>
        <button className="btn btn-secondary" onClick={next} disabled={pageNumber === infoCharacters.pages}>Next</button>
        
    </div>
  )
}

export default Pagination