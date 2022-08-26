import React from 'react'
import Item from "../components/Item";

function ItemList({items}) {
  return (
    <div>
      {
        items.map((item) =>{
          return <Item item={item} />
        })
      }
    </div>
  );
}

export default ItemList