import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import IconButton from '@material-ui/core/IconButton';

import './TableCommon.css';

const TableCommon = props => {
  
  const {tableHeader, records, page, changePage, upvote} = props;
  const [prevDisabled, setPrevDisabled] = useState(true);
  const tableHeaderText = tableHeader;

  const newWindow = (url) => {
    window.open(url)
  }

  const newsAge = (time) => {
    let diffTime = Math.floor(Date.now()/1000) - time;
    if(diffTime < 60){
      return Math.floor(diffTime) + (diffTime > 1 ?' seconds' : ' second') + 'ago';
    }
    diffTime = diffTime / 60
    if(diffTime < 60){
      return Math.floor(diffTime) + (diffTime > 1 ?' minutes' : ' minute') + 'ago'
    }
    diffTime = diffTime / 60
    if(diffTime < 24){
      return Math.floor(diffTime) + (diffTime > 1 ?' hours' : ' hour') + 'ago'
    }
    diffTime = diffTime / 24
    if(diffTime < 30){
      return Math.floor(diffTime) + (diffTime > 1 ? ' days' : ' day') + 'ago'
    }
    diffTime = diffTime / 30
    if(diffTime < 12){
      return Math.floor(diffTime) + (diffTime > 1 ? ' months' : ' month') + 'ago'
    }
    diffTime = diffTime / 12
    return Math.floor(diffTime) + (diffTime > 1? ' years':' year') +'ago'

  }
  useEffect(() => {
    page === 0 ? setPrevDisabled(true) : setPrevDisabled(false)
  },[page])

  return (
    <React.Fragment>
    <TableContainer component={Paper}>
      <Table className="table" size="small" aria-label="a dense table">
        <TableHead className="table-header">
          <TableRow>
            {tableHeaderText.map((headerNames) => {
              return <TableCell key={headerNames} className="table-header-cell">{headerNames}</TableCell>
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row) =>{ 
            const url = (row.url).split('/')[2];
            return (
            <TableRow key={row.objectID}>
              <TableCell className="medium">{row.num_comments}</TableCell>
              <TableCell className="medium">{row.upvote}</TableCell>
              <TableCell className="medium dusky"><span><IconButton aria-label="UpVote" onClick={()=>upvote(row.objectID)}><ArrowDropUpIcon/></IconButton></span></TableCell>
              <TableCell>
                <Link onClick={()=>{newWindow(row.url)}} className="medium">{row.title} </Link> 
                <Link className="small dusky">({url}) </Link>  
                <span className="small dusky">by </span> 
                <Link className="small">{row.author} </Link>
                <Link className="small dusky">{newsAge(row.created_at_i)}</Link>
              </TableCell>
            </TableRow>
          )})}
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container direction="row" justify="flex-end" alignItems="center">
        <Button className="pagination-button" onClick={()=>{changePage('previous')}} disabled={prevDisabled}>Previous</Button> | 
        <Button className="pagination-button" onClick={()=>{changePage('next')}}>Next</Button>
    </Grid>
    </React.Fragment>
  );
}

export default TableCommon