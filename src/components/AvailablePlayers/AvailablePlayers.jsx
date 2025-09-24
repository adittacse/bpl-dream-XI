import React, { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({ playersPromise }) => {
    const playersData = use(playersPromise);

    return (
        <div className="grid grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {
                playersData.map(player => <Player key={player.id} player={player}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;