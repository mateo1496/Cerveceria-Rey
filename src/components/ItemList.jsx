import React from 'react'
import Item from "../components/Item";

function ItemList({items}) {
  return (
    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
      {
        items.map((item) =>{
          return <Item item={item} />
        })
      }
    </div>
  );
}

export default ItemList