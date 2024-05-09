import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

import EnlistSection from "./EnlistSection";
function BotsPage() {
  //start here with your code for step one
  const [army, setArmy] = useState([]);
  const [bots, setBots] =useState([]);
  const[clickedBot, setClickedBot] = useState(null);
  

  useEffect(() => {
    getBots();
  }, []);

  const getBots = () => {
    
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBots(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <YourBotArmy setArmy={setArmy} army={army}/>
      <EnlistSection 
      army={army}
      setArmy={setArmy}
      bots={bots}
      setBots={setBots}
      clickedBot={clickedBot} 
      setClickedBot={setClickedBot}
      />
      <BotCollection bots={bots} setClickedBot={setClickedBot}/>
    </div>
  )
}

export default BotsPage;
