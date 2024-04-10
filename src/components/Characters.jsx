/* eslint-disable react/prop-types */

export default function Characters(props) {
    const {characters,setCharacters} = props;
    const resetCharacters = ()=>{
        setCharacters(null);
    }
    const eliminar = (index) => {
        const dateCharacter = [...characters]
        dateCharacter.splice(index,1)
        setCharacters(dateCharacter)
        console.log(characters)
        console.log(index)
    };

    const matar = (index) => {
        const dateCharacter = [...characters]
        dateCharacter[index].status = "Dead"
        setCharacters(dateCharacter)
        console.log(characters)
        console.log(index)
    };

    const revivir = (index) => {
        const dateCharacter = [...characters]
        dateCharacter[index].status = "Alive"
        setCharacters(dateCharacter)
        console.log(characters)
        console.log(index)
    };

  return (
    <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver a la home</span>
        <div className="container-characters">
            {characters.map((character,index)=>(
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name}/>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status==='Alive'?(
                                <>
                                <span className="alive"/>
                                Alive
                                </>
                                
                            ):character.status === 'Dead' ?(
                                <>
                                <span className="dead"/>
                                Dead
                                </>
                            ):(
                                <>
                                <span className="unknown" />
                                Unknown
                                </>
                            )}
                        </h6>
                        <p>
                            <span className="text-grey">Episodios: </span>
                            <span>{character.episode.length}</span>
                        </p>
                        <p>
                            <span className="text-grey">Especie: </span>
                            <span>{character.species}</span>
                        </p>
                        <p>
                            <button className='eliminar' onClick={()=> eliminar(index)}> Eliminar</button>
                            
                        </p>
                        <h6>
                            {character.status==='Alive'?(
                                <>
                                <button className='eliminar' onClick={()=> matar(index)}> Matar</button>
                                </>
                                
                            ):(
                                <>
                                <button className='eliminar' onClick={()=> revivir(index)}> Revivir</button>
                                </>
                            )}
                        </h6>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Volver a la home</span> 
                             
    </div>
  )
}
