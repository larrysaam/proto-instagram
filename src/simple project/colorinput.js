const Input =({setColor}) =>{

    return(
        <>
        <input type='text' onChange={(e) => setColor(e.target.value)} />
        </>
        )
}

export default Input;