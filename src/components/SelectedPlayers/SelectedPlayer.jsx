import deleteIcon from "../../assets/delete-icon.png";

const SelectedPlayer = ({ player, removePlayer }) => {
    const { image, name, role } = player;

    const handleRemove = () => {
        removePlayer(player);
    }

    return (
        <div className="flex justify-between items-center border-2 border-[#13131310] p-6 mb-6 rounded-2xl">
            <div className="flex items-center gap-6">
                <img className="w-20 h-20 rounded-2xl" src={image} alt="player image" />
                <div>
                    <h3 className="text-2xl text-[#131313] font-semibold">{name}</h3>
                    <p className="text-[#13131360]">{role}</p>
                </div>
            </div>
            <button onClick={handleRemove} className="cursor-pointer">
                <img src={deleteIcon} alt="delete icon" />
            </button>
        </div>
    );
};

export default SelectedPlayer;