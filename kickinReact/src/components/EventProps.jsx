
export const EventProps = () =>{
    const callingAlokName = () =>{
        console.log('this is for Alok')
    } 

    const callingAmarName = () =>{
        console.log('This is for Amarjeet')
    }
    return(
        <Childrencomponent alok={() => callingAlokName('Alok')} amar={() => callingAmarName('Amar')}/>
    )
}

const Childrencomponent = (props) => {
    const {alok, amar} = props;
    const childEvent = () => {
        console.log('this is child event');
        alok();
    }
    return(
        <>
        <button onClick={alok}>Click Me</button><br /><br />
        <button onMouseEnter={amar}>Hover Me</button><br /><br />
        <button onClick={childEvent}>Click ME</button>
        </>
    )
}