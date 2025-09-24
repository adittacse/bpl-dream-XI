import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers';
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers';
import Navbar from './components/Navbar/Navbar';
import { Suspense, useState } from 'react';

const fetchPlayers = async () => {
    const res = await fetch("/players.json");
    return res.json();
}

function App() {
    const [toggle, setToggle] = useState(true);

    const playersPromise = fetchPlayers();

    return (
        <>
            <Navbar></Navbar>

            <div className="flex items-center justify-between max-w-[1200px] mx-auto mt-[95px] mb-[38px]">
                <h2 className="text-[28px] font-bold">Available Players</h2>
                <div className="flex items-center">
                    <button onClick={() => setToggle(true)} className={`border-1 border-gray-300 py-[14px] px-[30px] rounded-l-[14px] border-r-0 ${toggle === true ? "bg-[#E7FE29] font-bold" : ""}`}>Available</button>
                    <button onClick={() => setToggle(false)} className={`border-1 border-gray-300 py-[14px] px-[30px] rounded-r-[14px] border-r-0 ${toggle === false ? "bg-[#E7FE29] font-bold" : ""}`}>Selected (<span>0</span>)</button>
                </div>
            </div>

            {
                toggle === true ? 
                    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
                    </Suspense> : <SelectedPlayers></SelectedPlayers>
            }
        </>
    )
}

export default App
