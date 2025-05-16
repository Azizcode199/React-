export const LessonJSX = () => {
  const laptop = "G15i";
  const price = 1500 + 10;
  const model = "DELL"
  return (
    <>
      <h1>Product</h1>
      <h2>Price of Laptop: ${price}</h2>
      <h3>Model of laptop: {laptop}</h3>

      <h2 className="bg-primary">Brand: {model}</h2>
      <h2 className={laptop.toLowerCase()}>Product</h2>
    </>
  );
};
