import './Dropdown.css'

function Selector(){
    return(
        <form id="selectionOptions" action=''>
             <select id="chosenOption" required>
                <option value="select" disabled selected>select</option>
                <option value="depositar">depositar</option>
                <option value="transferir">transferir</option>
            </select>
            <input type='submit' value='submit'></input>
        </form>
    );
}

export default Selector;