

function Boxcard(props) {
    return (
        <div>
            <div class="card">                
                <div class="container">                 
                    {props.children}
                </div>
                </div>
        </div>
    )
}

export default Boxcard
