import './filter.css'
import { useState } from 'react';


const Filter = (props) => {

    const {setStatus,setGender} = props;
    const [selectedOptionStatus, setSelectedOptionStatus] = useState('Any');
    const [selectedOptionGender,setSelectedOptionGender] = useState('Any');

    
    const handleOptionChangeStatus = (option) => {
        setSelectedOptionStatus(option);
        if(option==='Any'){
            setStatus("");
        }else{
            setStatus(option);
        }
    };

    const handleOptionChangeGender = (option) =>{
        setSelectedOptionGender(option);
        if(option==='Any'){
            setGender("");
        }else{
            setGender(option);
        }
    };

    return (

        <div className='dropdown-container d-flex justify-content-center gap-3 '>

            <div className="dropdown-status">  
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
                Status </button>  
                <ul className="dropdown-menu">    
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Any' ? 'active' : ''}`}  href="#" onClick={() => handleOptionChangeStatus('Any')}>Any</a></li>
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Alive' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeStatus('Alive')}>Alive</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Dead' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeStatus('Dead')}>Dead</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionStatus === 'Unknown' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeStatus('Unknown')}>Unknown</a></li>  
                </ul>
            </div>

            <div className="dropdown-gender">  
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">    
                Gender </button>  
                <ul className="dropdown-menu">    
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Any' ? 'active' : ''}`}  href="#" onClick={() => handleOptionChangeGender('Any')}>Any</a></li>
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Female' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeGender('Female')}>Female</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Male' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeGender('Male')}>Male</a></li>    
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Genderless' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeGender('Genderless')}>Genderless</a></li> 
                    <li><a className={`dropdown-item ${selectedOptionGender === 'Unknown' ? 'active' : ''}`} href="#" onClick={() => handleOptionChangeGender('Unknown')}>Unknown</a></li>  
                </ul>
            </div>

        </div>
        
        

    )

}

export default Filter