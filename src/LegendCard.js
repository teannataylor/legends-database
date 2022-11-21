import {Link} from 'react-router-dom';
import ReactPlayer from "react-player";

function LegendCard({legend, updateLegend}){
    const {id, name, nickname, legendType,likes, trailer} = legend
 
    function upVote(e){
        // add code here to do a patch request
        const configObj = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"likes": likes + 1 })
        }
        fetch(`http://localhost:3004/legends/${id}`, configObj)
        .then(r => r.json())
        .then(data => {
            updateLegend(data)
        })
        // change state 
        // change db 
    }

    

    return (
        <div className="card">
            <h2>{name}</h2>
            <div>
            <ReactPlayer url={trailer}   />
            </div>
            
            <h2>{nickname}</h2>
            <h3>Legend Type: {legendType}</h3>
            <p>{likes} likes</p><span onClick={upVote}>👍</span>
            <div>
                <Link to={`/legends/${id}/edit`}><button>Edit</button></Link>
            </div>

        </div>
    )
}

export default LegendCard