import React from "react";

import SingleBot from "./SingleBot";

function BotCollection(props) {
  // Your code here
  const { bots, setClickedBot } = props;
  
  const addToArmy = (bot) => {    
    setClickedBot(bot);
  };
 
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        
        {bots.map((bot) => {
          return<div key={bot.id} onClick={() => addToArmy(bot)}>
            <SingleBot bot={bot} />
           Collection of all bots 
          </div>;
        })}
      </div>
    </div>
  );
}

export default BotCollection;
