import SearchComponent from "../search/search";
import Logo from "./Logo";
import Menu from "./Menu";
import Shop from "./Shop";
import User from "./User";
/*  bg-orange-600 */

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 text-slate-100 ">
      <Logo />

      <div className="flex items-center  gap-6  ">
        <SearchComponent />
        <Shop />
        <User />
      </div>

      <Menu />
    </div>
  );
};

export default Navbar;
