import { useState } from 'react';

const Filter = (props) => {

    const {setStatus,setSpecies,setGender} = props;
    const [selectedOptionStatus, setSelectedOptionStatus] = useState('Any');
    const [selectedOptionGender,setSelectedOptionGender] = useState('Any');

    const [selectedSpecies, setSelectedSpecies] = useState('Any');

    const speciesList = ['Any', 'Human', 'Alien', 'Humanoid', 'Unknown', 'Poopybuthole', 'Mythological Creature', 'Animal', 'Robot', 'Cronenberg', 'Disease'];

    const handleOptionChange = (option, type) => {
        if (type === 'status') {
            setSelectedOptionStatus(option);
            setStatus(option === 'Any' ? "" : option);
        } else if (type === 'species') {
            setSelectedSpecies(option);
            setSpecies(option === 'Any' ? "" : option);
        } else if (type === 'gender') {
            setSelectedOptionGender(option);
            setGender(option === 'Any' ? "" : option);

    
    return (

        <div className='dropdown-container d-flex justify-content-center gap-3 '>

            <div className="dropdown-status">  
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
                Status </button>  
                <ul className="dropdown-menu">    
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Any' ? 'active' : ''}`}  href="#" onClick={() => handleOptionChange('Any','status')}>Any</a></li>
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Alive' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Alive','status')}>Alive</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Dead' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Dead','status')}>Dead</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Unknown' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Unknown','status')}>Unknown</a></li>  
                </ul>
            </div>

            <div className="dropdown-gender">  
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
                Gender </button>  
                <ul className="dropdown-menu">    
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Any' ? 'active' : ''}`}  href="#" onClick={() => handleOptionChange('Any','gender')}>Any</a></li>
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Female' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Female','gender')}>Female</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Male' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Male','gender')}>Male</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Genderless' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Genderless','gender')}>Genderless</a></li> 
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Unknown' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Unknown','gender')}>Unknown</a></li>  
                </ul>
            </div>
            
            <div className="dropdown">  
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
        Species </button>  
        <ul className="dropdown-menu">    
            <li><a className={`dropdown-item ${selectedSpecies === 'Any' ? 'active' : ''}`}  href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Any', 'species')}}>Any</a></li>
            <li><a className={`dropdown-item ${selectedSpecies === 'Human' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Human', 'species')}}>Human</a></li>    
            <li><a className={`dropdown-item ${selectedSpecies === 'Alien' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Alien', 'species')}}>Alien</a></li>    
            <li><a className={`dropdown-item ${selectedSpecies === 'Humanoid' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Humanoid', 'species')}}>Humanoid</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Unknown' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Unknown', 'species')}}>Unknown</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Poopybuthole' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Poopybuthole', 'species')}}>Poopybuthole</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Mythological Creature' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Mythological Creature', 'species')}}>Mythological Creature</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Animal' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Animal', 'species')}}>Animal</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Robot' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Robot', 'species')}}>Robot</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Cronenberg' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Cronenberg', 'species')}}>Cronenberg</a></li>  
            <li><a className={`dropdown-item ${selectedSpecies === 'Disease' ? 'active' : ''}`} href="#" onClick={(event) => {event.preventDefault(); handleOptionChange('Disease', 'species')}}>Disease</a></li>  
        </ul>
    </div>

        </div>
    )
}

export default Filter;