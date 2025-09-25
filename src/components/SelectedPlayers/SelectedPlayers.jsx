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
        </div>
    );
};

export default SelectedPlayers;