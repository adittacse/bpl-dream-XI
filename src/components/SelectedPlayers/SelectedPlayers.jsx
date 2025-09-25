import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {

    return (
        <div className="max-w-[1200px] mx-auto">
            {
                purchasedPlayers.map(player => <SelectedPlayer key={player.id} 
                                                    removePlayer={removePlayer}
                                                    player={player}>
                                                </SelectedPlayer>)
            }

            <button className="font-bold outline-1 outline-black outline-p-4 bg-[#E7FE29] py-3.5 px-5 rounded-xl cursor-pointer">Add More Player</button>
        </div>
    );
};

export default SelectedPlayers;