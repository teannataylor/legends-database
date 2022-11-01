import { useEffect, useState } from "react";
import LegendCard from "./LegendCard";
import LegendForm from "./LegendForm"; 
import {Routes ,Route} from "react-router-dom";


function LegendsPage(){
    const [legends, setLegends] = useState([])

    useEffect(() => {
        fetch('http://localhost:3004/legends')
        .then(r => r.json())
        .then(data => setLegends(data))
    }, [])

    const addNewLegend = (legend) => {
        setLegends((legends) => [...legends, legend])
    }

    const updateLegend = (updatedLegend) => {
      

        const newLegends = legends.map(legend => {
            if(updatedLegend.id === legend.id){
                return updatedLegend
            } else {
                return legend
            }
        })

        setLegends(newLegends)
    }

    return (
        <div>
            <Routes>
                <Route exact path="/legends/new">
                    <LegendForm addNewLegend={addNewLegend} />
                </Route>

                <Route exact path="/legends/:id/edit">
                    <LegendForm legends={legends} />
                </Route>

                <Route path="/legends">
                    {legends.map(l => <LegendCard legend={l} key={l.id} updateLegend={updateLegend}/>)}
                </Route>
            </Routes>
        </div>
    )
}

export default LegendsPage