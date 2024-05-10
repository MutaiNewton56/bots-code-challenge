import BotSpecs from "./BotSpecs";

function deleteBot(props) {
    const { clickedBot, setClickedBot, army, setArmy, bots, setBots } = props;
  
    const enlist = () => {
      console.log("Enlist a bot");
  
      // Check if the bot exists in the army
      const isBotEnlisted = army.some((bot) => bot.id === clickedBot.id);
      if (isBotEnlisted) {
        // Remove the bot from the army
        const updatedArmy = army.filter((bot) => bot.id !== clickedBot.id);
        setArmy(updatedArmy);
  
        // Add the bot back to the bots array
        const updatedBots = [...bots, clickedBot];
        setBots(updatedBots);
      }
  
      setClickedBot(null);
    };
  
    const goBack = () => {
      console.log("Go back");
      setClickedBot(null);
    };
  
    if (!clickedBot) {
      return null;
    }
  
    return <BotSpecs bot={clickedBot} deleteBot={deleteBot} />;
  }

  export default deleteBot;