import { useEffect, useState } from "react";
import LegendCard from "./LegendCard";
import LegendForm from "./LegendForm"; 
import {
    Switch,
    Route
  } from "react-router-dom";


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
      

        // return legends.map(legend => {
        //     if (updatedLegend.id === legend.id){
        //         return updatedLegend
        //     } else {
        //         return legend
        //     }
        // })

        const newLegends = legends.map(legend => {
            if(updatedLegend.id === legend.id){
                return updatedLegend
            } else {
                return legend
            }
        })

        setLegends(newLegends)
    }

//     <Routes>
//     <Route  path="/legends" element={<LegendsPage />}/>
//     <Route  path="/" element={<h1>Home</h1>}/>
//     <Route  path="/new" element={<LegendForm />}/>

//   </Routes>
    return (
        <div>
            <Switch>
                <Route exact path="/legends/new">
                    <LegendForm addNewLegend={addNewLegend} />
                </Route>

                {/* <Route exact path="/legends/:id/edit">
                    <LegendForm legends={legends} />
                </Route> */}

                <Route exact path="/legends/:id/edit">
                   <LegendForm legends={legends}/>
                   </Route>
                   <Route path="/legends">
                    {legends.map(h => <LegendCard legend={h} key={h.id} updateLegend={updateLegend}/>)}
                </Route>
            </Switch>
        </div>
    )
}

export default LegendsPage