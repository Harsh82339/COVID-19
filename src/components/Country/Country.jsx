import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl } from '@material-ui/core'
import styles from './Country.module.css';
import {fetchcountries} from "../../api";

const Country = ({handleCountryChange}) => {

const [fetchedCountries, setFetchCountries] = useState([]);

    useEffect(() =>{
        const fetchapi = async () => {
            setFetchCountries(await fetchcountries());
        }
        fetchapi();
    },[setFetchCountries]);

    return(
            <FormControl className={styles.formControl}>
                 <NativeSelect defaultValue=" " onChange={(e) => handleCountryChange(e.target.value)}> 
                     
                    <option value="">Global</option>
                    {fetchedCountries.map((country, i) =><option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>     
    )
} 

export default Country;