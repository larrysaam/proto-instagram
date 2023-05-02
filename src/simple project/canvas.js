const Canvas =({color}) =>{

    return(
        <div className='canvas' style={{height:"300px", width: "300px", border:"1px solid red", backgroundColor: color}}>
        <p style={{textAlign: "center"}}>{color}</p>
        </div>
    )
}

export default Canvas;