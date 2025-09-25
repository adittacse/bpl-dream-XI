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

    return (
        <>
            <Navbar availableBalance={availableBalance}></Navbar>

            <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-[95px] mb-[38px] sora">
                <h2 className="text-[28px] font-bold">Available Players</h2>
                <div className="flex items-center">
                    <button onClick={() => setToggle(true)} className={`border-1 border-gray-300 py-[14px] px-[30px] rounded-l-[14px] border-r-0 ${toggle === true ? "bg-[#E7FE29] font-bold" : ""}`}>Available</button>
                    <button onClick={() => setToggle(false)} className={`border-1 border-gray-300 py-[14px] px-[30px] rounded-r-[14px] border-r-0 ${toggle === false ? "bg-[#E7FE29] font-bold" : ""}`}>Selected (<span>0</span>)</button>
                </div>
            </div>

            <div className="flex justify-center sora">
                {
                    toggle === true ? 
                        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                            <AvailablePlayers 
                                availableBalance={availableBalance}
                                setAvailableBalance={setAvailableBalance} 
                                playersPromise={playersPromise}>
                            </AvailablePlayers>
                        </Suspense> : <SelectedPlayers></SelectedPlayers>
                }
            </div>
        </>
    )
}

export default App
