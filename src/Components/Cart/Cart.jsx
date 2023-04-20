import { Link } from 'react-router-dom';

const Cart = () => {
    return (
        <div>
            <h1>Imagen Producto</h1>
            <button className="btn btn-dark"><link to={'/checkout'}>Finalizar Compra</link></button>
        </div>
    );
}

export default Cart;