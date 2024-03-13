function StoreItem({ title, description, image, price}) {
    return (
      <div className='item'>
          <h1>{title}</h1>
          <p>{description}</p>
          <p>{price}</p>
          <img src={image} alt={`img-${title}`} width={100} height={100}/>
          {/* <span>{rating}</span> */}
      </div>
    )
  }
  
  export default StoreItem;