const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white absolute right-4 px-4 top-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
