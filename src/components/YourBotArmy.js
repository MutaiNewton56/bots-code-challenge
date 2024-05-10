import React from "react";

import SingleBot from "./SingleBot";

function YourBotArmy(props) {

  const { army, setArmy, bots, setBots } = props;

  const deleteBot = (botId) => {
   
    const updatedArmy = army.filter((bot) => bot.id !== botId);
  setArmy(updatedArmy);

  const botToRemove = army.find((bot) => bot.id === botId);
  if (botToRemove) {
    console.log("botToRemove");
    console.log(botToRemove);
    const updatedBots = [...bots, botToRemove];
    console.log("updatedBots")
    console.log(updatedBots)
    setBots(updatedBots);
  }
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {army.map((bot) => {
            return <div><SingleBot bot={bot} />
          <button
            className="ui button fluid"
            onClick={() => deleteBot(bot.id)}
          >
           deleteBot
          </button>
          </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
