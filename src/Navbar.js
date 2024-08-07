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
        <div className='loginButtons'>
           <div id='username'>username</div> 
           <div id='logout'>logout</div> 
        </div>
    </div>  
    );
}

export default Navbar;