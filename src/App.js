import React from 'react'
import useFetch from './useFetch'


const App = () => {
  const {data, loading, error, refetch } = useFetch('https://api.chucknorris.io/jokes/random')
  console.log(data);
  if(loading) return <h1 style={{textAlign:"center"}}>Loading...</h1>
  if(error) console.log(error)
  console.log(data)
  return (
    <>
    <div style={{
      textAlign : "center",margin:"150px",fontSize:"3rem"
    }}>{data?.value}</div>
    
    <button style={{
      fontSize:"2rem",padding:"1rem",display: 'block', margin: 'auto'
    }} 
    onClick={refetch}>Refetch</button>
    </>
    
)}

export default App 