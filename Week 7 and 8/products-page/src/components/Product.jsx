function Product(props){
    let {image,name,brand,description,price} = props.product;

    return(
        <div className="p-4 bg-black text-amber-50 m-1">
            <img src={image} alt="" />
            <br />
            <h1>{name}</h1>
            <h2>{brand}</h2>
            <p>{description}</p>
            <h2>Price: {price}</h2>
        </div>
    )
}

export default Product;