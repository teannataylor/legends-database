import {Link} from 'react-router-dom'

function LegendCard({legend}){
    const {id, name, nickname, legendtype} = legend
   


    return (
        <div className="card">
            <h2>{name}</h2>
            <h2>{nickname}</h2>
            <h3>{legendtype}</h3>
            <div>
                <Link to={`/heroes/${id}/edit`}><button>Edit</button></Link>
            </div>

        </div>
    )
}

export default LegendCard