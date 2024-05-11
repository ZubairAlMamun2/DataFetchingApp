import React, { useEffect, useState } from 'react'
import Countrys from './Countrys'
import Search from './Search'
import './app.module.css'

const url='https://restcountries.com/v3.1/all';

const Countris = () => {
    
    const[error,setError]=useState(null)
    const[data,setData]=useState([])
    const[filteredData,setFilteredData]=useState(data)
    const[isloading,setIsloading]=useState(true)
    

    const dataFatch=async(url)=>{
        setIsloading(true)
        try{
            const response= await fetch(url)
            const data= await response.json()
            setData(data)
            setFilteredData(data)
            setIsloading(false)
            setError(null)
        }catch(error){
            setIsloading(false)
            setError(error)
        }
    }

    useEffect(()=>{
        dataFatch(url)
    },[])

    const handleOnRemove=(name)=>{
        const filter=filteredData.filter((country)=>
            country.name.common!==name
        )
        setFilteredData(filter)
    }
    const getSearchValue=(e)=>{
        let value=e.toLowerCase();
        const newCountry=data.filter((country)=>{
            const countryName=country.name.common.toLowerCase();
            return countryName.startsWith(value)
        });
        setFilteredData(newCountry)
    }

  return (
    <>
    <h1>Country App</h1>
    <Search SearchValue={getSearchValue}/>
    {isloading&&<p>Data is Loading</p>}
    {error&&<p>{error.message}</p>}
    {data&&<Countrys onRemove={handleOnRemove} countrys={filteredData}/>}
    <h6 style={{textAlign:'right'}}>BY @ZUBAIR</h6>
    </>
  )
}

export default Countris