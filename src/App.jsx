import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense, useState } from 'react';

const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
}

const playersPromise = fetchPlayers();

function App() {
    const [toggle, setToggle] = useState(true);
    const [availableBalance, setAvailableBalance] = useState(6000000000);
    const [purchasedPlayers, setPurchasedPlayers] = useState([]);

    const removePlayer = (player) => {
        const filteredData = purchasedPlayers.filter(data => data.id !== player.id);
        setPurchasedPlayers(filteredData);
        const playerPrice = parseFloat(player.price.split("crore").join("").split("lakh").join(""));
        let newBalance = availableBalance + playerPrice;
        setAvailableBalance(newBalance);
    }

    return (
        <>
            <Navbar availableBalance={availableBalance}></Navbar>

            <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-[95px] mb-[38px] sora">
                <h2 className="text-[28px] font-bold">
                    {toggle === true ? "Available Players" : `Selected Players (${purchasedPlayers.length}/6)`}
                </h2>
                <div className="flex items-center">
                    <button onClick={() => setToggle(true)} className={`border-1 border-gray-300 py-[14px] px-[30px] rounded-l-[14px] border-r-0 ${toggle === true && "bg-[#E7FE29] font-bold"}`}>Available</button>
                    <button onClick={() => setToggle(false)} className={`border-1 border-gray-300 py-[14px] px-[30px] rounded-r-[14px] border-r-0 ${toggle === false && "bg-[#E7FE29] font-bold"}`}>Selected (<span>{purchasedPlayers.length}</span>)</button>
                </div>
            </div>

            {
                toggle === true ? 
                    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                        <AvailablePlayers 
                            purchasedPlayers={purchasedPlayers}
                            setPurchasedPlayers={setPurchasedPlayers}
                            availableBalance={availableBalance}
                            setAvailableBalance={setAvailableBalance} 
                            playersPromise={playersPromise}>
                        </AvailablePlayers>
                    </Suspense> 
                    : <SelectedPlayers removePlayer={removePlayer} purchasedPlayers={purchasedPlayers}></SelectedPlayers>
            }
        </>
    )
}

export default App
