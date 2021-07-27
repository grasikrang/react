import './sidebar.css';

export default function Sidebar(){
    return(<div className='sidebar'>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>About Me</span>
            <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        </div>
        <div className='sidebarItem'>
        <span className='sidebarTitle'>Categories</span>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
        </ul>
        </div>
        <div className='sidebarItem'>
            <span className='sidebarTitle'>Follow Us</span>
            <div className='sidebarSocial'>
                 <i className='topIcon fab fa-facebook-square'></i>
                <i className='topIcon fab fa-twitter-square'></i>
                <i className='topIcon fab fa-pinterest-square'></i>
                <i className='topIcon fab fa-instagram-square'></i>
            </div>
        </div>
    </div>);
    
    
}