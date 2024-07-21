const Simpsons = ({ simpsons }) => {
  return simpsons.map((simpsons) => {
    return (
      <div style={{ backgroundColor: "lightgrey", margin: "20px" }}>
        <p>{simpsons.character}</p>

        <p>{simpsons.quote}</p>
      </div>
    );
  });
};

export default Simpsons;
