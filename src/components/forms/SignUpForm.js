import { useNavigate } from "react-router-dom"


const SignUpForm = ()=>{
    let navigate = useNavigate()
    

const handleSubmit = ()=>{
    
  navigate('/account/user')

}
    
    return (
        <form action="" 
             className="signup"
                
            >
                <input type="email" name="email" id="" placeholder="email"/>
                <input type="password" name="" id="" placeholder="password" /><br />
                <input type="radio" id="label" name="profile" value="label"/>
                <label for="label">Label</label><br/>
                <input type="radio" id="band" name="profile" value="band"/>
                <label for="band">Band</label><br/>
                <input type="radio" id="fan" name="profile" value="fan"/>
                <label for="fan">Fan</label><br />
                <button onClick = {()=> handleSubmit()} type="submit">Submit</button>

        </form>
        )
}

export default SignUpForm