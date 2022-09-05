import PropTypes from "prop-types";

function Painting(props) {
  const {
    imageUrl,
    title,
    profileUrl,
    author = "не известен",
    price,
    quantity,
  } = props;
  console.log(props);
  return (
    <div>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор: <a href={profileUrl}>{author}</a>
      </p>
      <p>Цена:{price} кредиитов</p>
      <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в ниличии"}</p>
      <button type="button"></button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
