import css from './EstateItem.module.css'

const EstateItem = ({key, picture, name, price, description, ehome }) => {
  return (
    <div className={css.EstateItemCard} key={key}>
      <img src={picture} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      {ehome && <p>{ehome}</p>}
    </div>
  );
};

export default EstateItem;