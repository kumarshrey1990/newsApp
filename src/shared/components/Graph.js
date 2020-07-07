import React, { useState, useEffect } from 'react';
import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Line} from 'react-chartjs-2';
import './Graph.css';

const Graph = props => {
    const [xaxis, setXaxis] = useState([]);
    const [yaxis, setYaxis] = useState([]);
    useEffect(()=>{
        setXaxis(props.records.map((record)=> record.objectID));
        setYaxis(props.records.map((record)=> record.upvote));
    },[props.records])
    const data = {
        labels: xaxis,
        datasets: [
          {
            label: 'Votes Chart',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'bevel',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: yaxis
          }
        ]
      };

    return <div >
    <Accordion>
      <AccordionSummary expandIcon={<ArrowDropDownIcon />} className="accordian-header">
        <Typography>
            <div>Voters Chart</div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <div className="graph-holder">   
          <Line data={data} responsive={true}/>
        </div>  
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
}

export default Graph