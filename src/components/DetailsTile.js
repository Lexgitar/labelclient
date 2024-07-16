import FindRole from "./functional/FindRole"

const DetailsTile = ({ userProfile }) => {
    return (
        <div className="detailstile">
            {/* <p>_id:{userProfile._id}</p> */}
            <h1> {userProfile.name}</h1>
            <h3>Location: {userProfile.location}</h3>
            <h4>About : {userProfile.about}</h4>
            {userProfile.genre && <h4>Genre : {userProfile.genre}</h4>}

            
            <a href={userProfile.links.includes('http') ? `${userProfile.links}` : `http://${userProfile.links}`} target='_blank' rel="noopener noreferrer"><h4>Link : {userProfile.links}</h4></a>

            <h4 className="collabs">Collabs:
                {((userProfile.attachedId !== undefined && userProfile.attachedId.length) &&
                    userProfile.attachedId.map(
                        id => {
                            return <FindRole key={id} id={id} />
                        }))
                    || ' no collabs yet'
                }
            </h4>
        </div>
    )
}

export default DetailsTile