
function ReOrder({OnReorder}) {

    return(

        <button className="reOrder__button" onClick={ () => {
            OnReorder();
        }}
        >Reorder :( !</button>

    )
}

export default ReOrder;