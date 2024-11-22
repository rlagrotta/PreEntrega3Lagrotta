import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

const Hero = ({ category,setCategory }) => {
  const {id} = useParams();

  useEffect(()=>{
    if(id){
      setCategory(id)
    }
  },[id, setCategory])


  return (
    <div style={{ position: "relative", textAlign: "center", color: "white", padding: "50px" }}>
    <div
      className="hero d-flex justify-content-center align-items-center"
      style={{
        position: "relative",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#e0e0e0', // Fondo gris claro
        backgroundImage: `url(/jewelery2.jpeg)`,
        backgroundRepeat: "no-repeat",
        height: '400px', 
        backgroundSize: "cover",
        /* backgroundPosition: "center", */
        filter: "blur(5px)",
        zIndex: -1,
      }}
    >

    </div>
    {/* <h1 style={{ marginTop: "3rem" }}>{category}</h1> */}
    </div>
  );
};

export default Hero;