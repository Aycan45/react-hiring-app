import React, {useEffect, useState} from "react";
import { Container, Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {IconButton , Typography } from "@mui/material";
import { DeleteOutlined} from "@mui/icons-material";
import { ThreeSixty } from "@mui/icons-material";
import { useNavigate } from "react-router";

export default function Developers(){
    const [developers, setDevelopers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        fetch('http://localhost:4004/developers')
        .then(res => res.json())
        .then(data => setDevelopers(data))
    
    }, []);

    const updateDeveloper = async (id) =>{
        
        await fetch(`http://localhost:4004/developers/${id}`)
            .then(response => response.json())
            .then(()=> navigate(`/developers/${id}`))
    
    }

    const deleteDeveloper = async (id) =>{

        await fetch(`http://localhost:4004/developers/${id}`,{
            method: "DELETE"
        })

        const newDeveloperList = developers.filter(developer => developer.id !== id)

        setDevelopers(newDeveloperList);
    }

    return(
        <Container>
            <Grid container spacing={3} margin={2}>
                {developers.map(developer =>(
                    <Grid item key={developer.id} xs={12} md={6} lg={4}>
                         <Card>
                                <CardHeader
                                    action={
                                        <IconButton onClick={() => deleteDeveloper(developer.id)}>
                                            <DeleteOutlined />  
                                        </IconButton>
                                    }
                                    title = {developer.name}
                                    subheader={developer.email}
                                    avatar={
                                        <IconButton onClick={() => updateDeveloper(developer.id)}>
                                            <ThreeSixty />  
                                        </IconButton>
                                    }
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary">
                                       Phone number: +{developer.phone}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Location: {developer.location}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Price: {developer.price} lv.
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Technology: {developer.technology}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Years of experience: {developer.experience} years
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Native Language: {developer.language}
                                    </Typography>
                                </CardContent>
                          </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}