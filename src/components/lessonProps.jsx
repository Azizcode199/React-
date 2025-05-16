// export const LessonProps = (props) =>{
export const LessonProps = ({product_Id, name}) =>{
    return (
        <>
        <h1>Love form porps</h1>
        {/* <h1>{props.product_Id} {props.name}</h1> */}
        <h1>{product_Id} {name}</h1>
        </>
    )
}