import userIcon from "../../assets/user.png";
import flagIcon from "../../assets/flag.png";

const Player = ({ player }) => {
    const {image, name, country, role, battingStyle, ballingStyle, rating, price} = player;
    console.log(player);
    return (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
            <figure>
                <img className="rounded-2xl" src={image} alt="player image" />
            </figure>
            <div className="mt-6">
                <div className="flex gap-3 mb-[18px]">
                    <img className="w-7 h-7" src={userIcon} alt="user icon" />
                    <h2 className="card-title">{name}</h2>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <img className="w-[20px] h-[20px]" src={flagIcon} alt="flag icon" />
                        <p>{country}</p>
                    </div>
                    <button className="btn rounded-lg">{role}</button>
                </div>
                <hr className="text-[#13131310]" />
                <div className="mt-4">
                    <p className="font-bold mb-4">Rating: {rating}</p>
                    <div className="flex items-center justify-between mb-3">
                        <p className="font-semibold">{battingStyle}</p>
                        <p>{ballingStyle}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Price: ${price}</p>
                        <button className="btn border-[#13131310] px-4 py-[9px]">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;