import { NavLink } from 'react-router-dom';
import addIcon from '../assets/add_icon.png';
import order_icon from '../assets/order_icon.png'

const Sidebar = () => {
  return (
<div className='w-[18%] min-h-screen border-r-2'>
    <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
        <NavLink
        to="/add"
        className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg "
        >
            <img src={addIcon} alt="Add" className="w-5 h-5" />
            <p className='hidden md:block'>Add Items</p>
        </NavLink>

        <NavLink
        to="/list"
        className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg "
        >
            <img src={order_icon} alt="Add" className="w-5 h-5" />
            <p className='hidden md:block'>List Items</p>
        </NavLink>

        <NavLink
        to="/orders"
        className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg "
        >
            <img src={order_icon} alt="Add" className="w-5 h-5" />
            <p className='hidden md:block'>Orders</p>
        </NavLink>

    </div>
</div>
    
  );
};

export default Sidebar;
