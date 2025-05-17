export const LessonEvent = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Bitte kaufen Sie den Artikel.");
  };

  const nextBuy = (product) => {
    console.log("Produkt gekauft:", product);
  };

  return (
    <>
      {/* Klick ohne Argument */}
      <button onClick={handleClick}>Jetzt kaufen</button>

      {/* Klick mit Argument */}
      <button onClick={() => nextBuy("Laptop")}>Nächstes Produkt kaufen</button>
    </>
  );
};
