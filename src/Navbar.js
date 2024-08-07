import './Navbar.css'

function Navbar(){
    return(
    <div className='navbar'>
        <div className='bankName'>mybank</div>
        <div className='currencies'>
            <div id='real'>R$XX,XX</div>
            <div id='dolar'>$XX,XX</div>
            <div id='euro'>€XX,XX</div>
        </div>
            <ul className='menuIcons'>
                <li id='username'><a href='/'>username</a></li>
                <li id='logout'><a href='/'>logout</a></li>
            </ul>
    </div>  
    );
}

export default Navbar;