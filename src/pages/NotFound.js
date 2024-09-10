import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h2>Page not found, my dude !! </h2>
        <br />
        <p>Go back to <Link to='/' >HOME</Link> perhaps, yeah? Ok, cool</p>
    </div>
  )
}

export default NotFound