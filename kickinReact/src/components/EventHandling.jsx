export const EventHandling = () =>{
    const handlingButtonClick = () =>{
        alert('Hello')
    }
    const getNameOfUser = (user) => {
        console.log(`Welcome Mr. ${user}`)
    }
    return(
        <>
            <button onClick={handlingButtonClick}>Click Me !!!</button>
            <button onClick={() => getNameOfUser("Alok Singh")}>Click Me !!!</button>
            <button onClick={() => getNameOfUser("Aamarjeet")}>Click Me !!!</button>
        </>
    )
}