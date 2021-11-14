import React, { useState } from "react";
import { Container, FormControlLabel, FormLabel, TextField, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Radio } from "@mui/material";
import { RadioGroup } from "@mui/material";
import { FormControl } from "@mui/material";
import { useNavigate } from "react-router";

export default function CreateDeveloper(){

    const navigate = useNavigate();

    const[name, setName] = useState('');
    
    const[email, setEmail] = useState('');
    
    const[phone, setPhone] = useState(null);
    
    const[location, setLocation] = useState('');
    
    const[price, setPrice] = useState(null);
    
    const[technology, setTechnology] = useState('Javascript');
    
    const[experience, setExperience] = useState(null);
    
    const[language, setLanguage] = useState('English');
    
    const[nameError, setNameError] = useState(false);
    
    const[emailError, setEmailError] = useState(false);
    
    const[phoneError, setPhoneError] = useState(false);
    
    const[locationError, setLocationError] = useState(false);
    
    const[priceError, setPriceError] = useState(false);
    
    const[experienceError, setExperienceError] = useState(false);

    const handleSubmit = (e) =>{
    
        e.preventDefault()
    
        setNameError(false)
    
        setEmailError(false)
    
        setPhoneError(false)
    
        setLocationError(false)
    
        setPriceError(false)
    
        setExperienceError(false)

        if (name === '') {
    
            setNameError(true)
    
        }
    
        if (email === '') {
    
            setEmailError(true)
    
        }
    
        if (phone === null) {
    
            setPhoneError(true)
    
        }
    
        if (location === '') {
    
            setLocationError(true)
    
        }
    
        if (price === null) {
    
            setPriceError(true)
    
        }
    
        if (experience === null) {
    
            setExperienceError(true)
    
        }
    
        if (name && email && phone && location && price && experience ) {
    
            fetch('http://localhost:4004/developers',{
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({name,email,phone,location,price,technology,experience,language})
            }).then(()=> navigate("/"))
    
        }
    
    }

    return(
        <Container>
            <Typography
                variant="h6"
                component="h2"
                color="textSecondary"
                gutterBottom
            >
                Add a new developer
            </Typography>
            
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
                    onChange ={(e)=> setName(e.target.value)}
                    label="Developer Name"
                    variant="outlined"
                    color='secondary'
                    required
                    error={nameError}
                />
                <br/>
                <TextField
                    onChange ={(e)=> setEmail(e.target.value)}
                    type="email"
                    label="Developer email"
                    variant="outlined"
                    color='secondary'
                    required
                    error={emailError}
                />
                <br/>
                <TextField
                    onChange ={(e)=> setPhone(e.target.value)}
                    type="phone"
                    label="Telephone number"
                    color="secondary"
                    required
                    error={phoneError}
                />
                <br/>
                <TextField 
                    onChange ={(e)=> setLocation(e.target.value)}
                    label="Location"
                    variant="outlined"
                    color='secondary'
                    required
                    error={locationError}
                />
                <br/>
                <TextField
                    onChange ={(e)=> setPrice(e.target.value)}
                    type="number"
                    label="Price"
                    color="secondary"
                    required
                    error={priceError}
                />
                <br/>
                <FormControl>
                <FormLabel>Technology</FormLabel>
                    <RadioGroup value={technology} onChange ={(e)=> setTechnology(e.target.value)}>
                        <FormControlLabel value="Javascript" control={<Radio />} label="Javascript"/>
                        <FormControlLabel value="Java" control={<Radio />} label="Java"/>
                        <FormControlLabel value=".NET" control={<Radio />} label=".NET"/>
                        <FormControlLabel value="Flutter" control={<Radio />} label="Flutter"/>
                        <FormControlLabel value="Python" control={<Radio />} label="Python"/>
                        <FormControlLabel value="PHP" control={<Radio />} label="PHP"/>
                    </RadioGroup>
                </FormControl>
                <br/>
                <TextField
                    onChange ={(e)=> setExperience(e.target.value)}
                    type="number"
                    label="Experience"
                    color="secondary"
                    required
                    error={experienceError}
                />
                <br/>
                <FormControl>
                <FormLabel>Language</FormLabel>
                    <RadioGroup value={language} onChange ={(e)=> setLanguage(e.target.value)}>
                        <FormControlLabel value="English" control={<Radio />} label="English"/>
                        <FormControlLabel value="Serbian" control={<Radio />} label="Serbian"/>
                        <FormControlLabel value="Bulgarian" control={<Radio />} label="Bulgarian"/>
                    </RadioGroup>
                </FormControl>
                <br/>
                <Button
                type="submit"
                color="success"
                variant="contained"
                endIcon={<KeyboardArrowRight/>}
                >
                    Submit
                </Button>
                
            </form>    

            
        </Container>
    );
}
