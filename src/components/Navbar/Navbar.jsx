import logo from "../../assets/logo.png";
import currency from "../../assets/Currency.png";

const Navbar = ({ availableBalance }) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto sora">
            <div className="flex-1">
                <a className="text-xl">
                    <img className="w-[60px] h-[60px]" src={logo} alt="logo" />
                </a>
            </div>
            <div className="flex items-center">
                <span className="mr-1">{availableBalance}</span> Coin
                <img className="ml-2.5" src={currency} alt="currency" />
            </div>
        </div>
    );
};

export default Navbar;