import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { addDatatoLocalStorage } from "../data/Apidata";

const Home = () => {
  let navigate = useNavigate();

  const [citydata, setCityData] = useState([]);
  const[searchterm, setSearchTerm] = useState('')

  const logouthandler = () => {
    navigate("/");
  };

  useEffect(()=>{
    
     if(!localStorage.getItem("email") || !localStorage.getItem("pass")){
       navigate("/login")
     }

  },[])


  const setDatatoLocaleStorage = async()=>{
    try{
   
       const d = await addDatatoLocalStorage()
       localStorage.setItem("data", JSON.stringify(d))

    }catch(error){
     console.log(error)

    }
  }

   useEffect(() => {
     
      setDatatoLocaleStorage()
     
      
  }, []);


  const getData = ()=>{
    
     try{
        const arrayofdata = localStorage.getItem("data")
        const d =arrayofdata !== null ? JSON.parse(arrayofdata): []
        setCityData(d)
     }catch(error){
         console.log(error)
     }
   

  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="home__detail">
      <div className="home__detail__btn">
        <button onClick={logouthandler}>Log out</button>
      </div>

      <div className="searchbox">

      <input placeholder="Search For Country" onChange={(e)=> setSearchTerm(e.target.value)} />
      
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>CityName</th>
            <th>Capital</th>
            
          </tr>
        </thead>

        <tbody>
          {citydata.filter((val)=>{if(searchterm === ""){
            return val
          }else if(val.name.toLowerCase().includes(searchterm.toLowerCase())){
            return val
          }
        }).map((item, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{index}</td>
                  <Link to={`/home/${item.capital}`}>
                  <td>{item.name}</td>
                  </Link>
                  <td>{item.capital}</td>
                  
                  
                </tr>
              </>

              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
