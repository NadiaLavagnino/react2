import Item from '../Item/Item';

const ItemList = ({productsList}) => {
    return (
        <div>
            {productsList.map(producto => <Item key={producto.id} prod={producto}/>)}
        </div>
    );
}

export default ItemList;
