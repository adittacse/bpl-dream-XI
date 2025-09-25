import { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({ playersPromise, purchasedPlayers, setPurchasedPlayers, availableBalance, setAvailableBalance }) => {
    const playersData = use(playersPromise);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {
                playersData.map(player => <Player key={player.id} 
                                                purchasedPlayers={purchasedPlayers}
                                                setPurchasedPlayers={setPurchasedPlayers}
                                                availableBalance={availableBalance}
                                                setAvailableBalance={setAvailableBalance} 
                                                player={player}>
                                          </Player>)
            }
        </div>
    );
};

export default AvailablePlayers;