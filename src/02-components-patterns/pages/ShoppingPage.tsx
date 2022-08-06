
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import { producs } from "../data/producst";
import { useShopingCart } from "../hooks/useShopingCart";
import "../styles/customs-styless.css";


export const ShoppingPage = () => {
    const { shoppingCart, onProductCountChange } = useShopingCart();

    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center"
            }}>
                {
                    producs.map((product) => (
                        <ProductCard
                            key={product.id}
                            className="bg-dark"
                            product={product}
                            // el onchange resive el product como parametro
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductImage />
                            <ProductTitle
                                title="coup"
                                className="text-white"
                            />
                            <ProductButtons className="border-light  text-white flex items-center" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-card">
                {
                    Object.entries(shoppingCart).map(([key, product]) => (
                        <ProductCard
                            key={key}
                            className="bg-dark"
                            product={product}
                            style={{ width: "120px", margin: "1rem" }}
                            value={product.count}
                            onChange={onProductCountChange}
                        >
                            <ProductImage />
                            <ProductTitle
                                title="coup"
                                className="text-white"
                            />
                            <ProductButtons className="border-light  text-white flex items-center" />
                        </ProductCard>
                    ))

                }
            </div>
        </div>
    )
}
