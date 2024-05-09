import React from "react";
import BotSpecs from "./BotSpecs";

function SingleBot({ bot }) {
    return(
        <div className="" style={{
            border: "1px solid black",
            margin: "10px",
        }}>
             <div>
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={bot.avatar_url}
            />
          </div>
          <div>
            <h2>Name: {bot.name}</h2>
          </div>
          <div>{bot.catchphrase}</div>
        </div>
    );
}
export default SingleBot;