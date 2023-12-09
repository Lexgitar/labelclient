import { useEffect, useState } from "react"

import SignUpForm from "../components/forms/SignUpForm"



const Home = () => {
    const [stuff, setStuff] = useState(null)

    useEffect(()=>{
        const fetchStuff = async ()=>{
            const response = await fetch('/api/bands')
            const json = await response.json()

            if (response.ok){
                setStuff(json)
            }
        }

        fetchStuff()
    }, [])

    return (
      <div className="home">
        <div className="stuff">
            {stuff && stuff.map((pc)=>(
                <p key={pc._id}>{pc.name}</p>
            ))}
        </div>
        <SignUpForm/>       
       
      </div>
    )
  }
  
  export default Home