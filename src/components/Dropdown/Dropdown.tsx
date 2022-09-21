import "./Dropdown.scss"

interface DropdownProps {
    options: string[],
    status: string,
    changeStatue(id: number, status: string): void
}

function Dropdown(props: DropdownProps) {
    function triggerUpdate() {
        const id = 1;
        const status = "great";
        props.changeStatue(id, status);
    }

    return (
        <select name="cars" id="cars" onChange={triggerUpdate} className="Dropdown" value={props.status}>
            {props.options.map((option, index) => {
                return (<option key={index} value={option}>{option}</option>);
            })}
        
        </select>
    );
}

export default Dropdown;