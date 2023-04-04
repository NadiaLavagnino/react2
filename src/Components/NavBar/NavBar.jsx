import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            <h3>React2</h3>
            <div>
                <button>Jeans</button>
                <button>Remeras</button>
                <button>Buzos</button>
            </div>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;
