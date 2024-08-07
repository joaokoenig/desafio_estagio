import './Navbar.css'

function Navbar(){
    return(
    <div className='navbar'>
        <div className='bankName'>mybank</div>
        <div className='currencies'>
            <div className='real'>R$XX,XX</div>
            <div className='dolar'>$XX,XX</div>
            <div className='euro'>€XX,XX</div>
        </div>
        <div className='loginButtons'>username logout</div>
    </div>    
    );
}

export default Navbar;