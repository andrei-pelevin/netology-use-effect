

const List = ({ state, activeItem, setActiveItem }) => {

    const onClick = (event) => {
        setActiveItem(Number(event.target.id))
        
    }

    return (
        <div className="list-group col-3 m-5">
            {state.map(item => {
                return (
                    <button key={item.id}
                    id={item.id}
                        type="button"
                        className={item.id === activeItem ? "list-group-item list-group-item-action active": "list-group-item list-group-item-action" } 
                        onClick={onClick}>
                        {item.name}
                        
                    </button>
                )
            }

            )}





        </div>
    )
}

export default List;