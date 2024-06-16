export const Card = ({
    title, value, logo
}) => {


    return (
        <div className="card-style">
            <h2 className="title-style">{title}</h2>
            <p className="card-value-style">{value}</p>
            <img className="card-img-style" src={logo} alt="logo"/>
        </div>
    )
}