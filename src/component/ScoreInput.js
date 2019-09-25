import React from 'react';

const ScoreSelector = (props) => {

  function handleChange(event){
    props.onScoreSelected(event.target.value)
  }



  return (
    <div className="score">
    <label>Score input</label>
    <input type="number" id="article-selector" defaultValue="default" onChange={handleChange}/>
    </div>
  )
}

export default ScoreSelector;
