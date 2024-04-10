import './filter.css'
import { useState } from 'react';


const Filter = (props) => {

    const {setStatus} = props;
    const [selectedOption, setSelectedOption] = useState('Any');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        if(option==='Any'){
            setStatus("");
        }else{
            setStatus(option);
        }
    };

    return (

        <div className="dropdown">  
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
            Status </button>  
            <ul className="dropdown-menu">    
                <li><a className={`dropdown-item ${selectedOption === 'Any' ? 'active' : ''}`}  href="#" onClick={() => handleOptionChange('Any')}>Any</a></li>
                <li><a className={`dropdown-item ${selectedOption === 'Alive' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Alive')}>Alive</a></li>    
                <li><a className={`dropdown-item ${selectedOption === 'Dead' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Dead')}>Dead</a></li>    
                <li><a className={`dropdown-item ${selectedOption === 'Unknown' ? 'active' : ''}`} href="#" onClick={() => handleOptionChange('Unknown')}>Unknown</a></li>  
                </ul>
            </div>

    )

}

export default Filter