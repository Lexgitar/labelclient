import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <h2>Well well, page not found, my dude !! </h2>
        <br />
        <p>Go back to ze<Link to='/' >HOME</Link> perhaps, yeah? Ok, cool</p>
    </div>
  )
}

export default NotFound