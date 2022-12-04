const Item = (props) => {
  return (
    <article className="menu-item">
      <img src={props.item.img} alt="menu item" className="photo" />
      <div className="item-info">
        <header>
          <h4>{props.item.title}</h4>
          <h4 className="price">${props.item.price}</h4>
        </header>
        <p className="item-text">{props.item.desc}</p>
      </div>
    </article>
  );
};

export default Item;
