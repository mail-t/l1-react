const ShoppingListItem = ({ itemName, isNew }) => {
  return (
    <li>
      {itemName}-nowy? {""}
      {isNew && "Nowy produkt, kupuj!"}
      
      {/* powyższy zapis wyświetli się tylko przy produkcie, który spełni warunek */}
      {/* {isNew ? "tak, nowy produkt!" : "nie, stary produkt"} - taki zapis z operatorem (?:) wyświetli się przy każdym produkcie */}
      {/* /* {`${isNew}`} taki zapis template string IsNew z backtick``, ponieważ ma wartosc typu boolean (true/false) */}
      
      {!isNew && "nie nowy"}
    </li>
  );
};

export default ShoppingListItem;
