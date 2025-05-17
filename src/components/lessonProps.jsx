export const LessonProps = ({product_Id, name}) =>{
    return (
        <>
        <h1>Informationen zum Produkt</h1>

       
        <h1>{product_Id} {name}</h1>
        </>
    )
}

export const LessonProps2 = (props) =>{
    return (
        <>
        <h1>Produktdetails</h1>

        <h1>{props.product_Id} {props.name}</h1>

        </>
    )
}