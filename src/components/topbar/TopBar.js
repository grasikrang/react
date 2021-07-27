import {Link} from 'react-router-dom';
import './topbar.css';

function TopBar(){
    return(
        <div className='top'>
            <div className='topLeft'>
                <i className='topIcon fab fa-facebook-square'></i>
                <i className='topIcon fab fa-twitter-square'></i>
                <i className='topIcon fab fa-pinterest-square'></i>
                <i className='topIcon fab fa-instagram-square'></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>LogOut</li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImg' src='https://i.picsum.photos/id/925/200/200.jpg?hmac=GRls_CYMB5cOj1RE3IwjOC0zUwiPc25idJNavVPWbtM' alt=''></img>
                <i className='topSearchIcon fas fa-search'></i>
            </div>
        </div>
    )

}
export default TopBar;
