import BotSpecs from "./BotSpecs";

function EnlistSection(props) {
    const { clickedBot, setClickedBot, army, setArmy, bots, setBots } = props;

    const enlist = () => {
        console.log("Enlist a bot");

        //check if the bot exist
        for (let i = 0; i < army.length; i++) {
            let bot = army[i];

            if (bot.id === clickedBot.id) {
                return;
            }
        }

        let newArmy = army;
        newArmy.push(clickedBot);

        setArmy(newArmy);

        const newBots = bots.filter((bot) => {
            if (bot.id === clickedBot.id) {
                return false;
            }
            return true;
        });

        setBots(newBots);
        
        setClickedBot(null);
    };

    const goBack = () => {
        console.log("Go back");
        setClickedBot(null);
    };

    if (!clickedBot){
        return null;
    }

    return <BotSpecs bot = {clickedBot} enlist={enlist} goBack={goBack}/>;
}

export default EnlistSection;