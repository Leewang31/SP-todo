import HeaderTitle from "./HeaderTitle";
import HeaderDate from "./HeaderDate";

const Header = () => {
    return (
        <div className='header'>
            <HeaderTitle/>
            <hr className='header-title-hr-bold'/>
            <hr className='header-title-hr'/>
            <hr className='header-title-hr'/>
            <HeaderDate/>
            <hr className='header-title-hr'/>
        </div>
    )
}
export default Header
