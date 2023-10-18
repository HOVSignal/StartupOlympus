type ProductDescriptionType = {
  show: boolean;
}

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? 'flex' : 'none',
  }

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>WHite Hoodie with Green logo <br></br>Made of jersey cotton. Fits perfectly with jeans, pants or shorts.</p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>smt</h4>
        <p>idk <br></br>idk</p>
      </div>
    </section>
  );
};
  
export default Description;
    