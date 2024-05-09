import React from "react";

import SingleBot from "./SingleBot";

function YourBotArmy({ army }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {army.map((bot) => {
            return <singleBot key={bot.id} bot={bot} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
