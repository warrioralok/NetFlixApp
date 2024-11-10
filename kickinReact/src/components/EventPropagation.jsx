import styles from './EventPropagation.module.css'

export const EventPropagation = () =>{
    const grandparent = () => {
        console.log('grand parent')
    }
    const parent = () => {
        //event.stopPropagation();
        console.log('parent')
    }
    const child =() => {
        //event.stopPropagation();
        console.log('child')
    }
    return(
        <>
            <div className={styles.grandparent} onClickCapture={grandparent}>
            <div className={styles.parent} onClickCapture={parent}>
            <div className={styles.child} onClickCapture={child}>
                This is the child div.
            </div>
        </div>
        </div>
        </>
    )
}