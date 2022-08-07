
import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"
import { producs } from "../data/producst";
import "../styles/customs-styless.css";

const product = producs[0];

export const ShoppingPage = () => {

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

                <ProductCard
                    key={product.id}
                    style={{ backgroundColor: "#222" }}
                    product={product}
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                // el onchange resive el product como parametro 

                >
                    {
                        // la ventaje de usar este patron es que puedo manderle a los hijos los parametros 
                        ({
                            reset,
                            increseBy,
                            isMaxCountReached,
                        }) => (
                            <>
                                <ProductImage />
                                <ProductTitle
                                    title="coup"
                                    className="text-white"
                                />
                                <ProductButtons className="border-light  text-white flex items-center" />
                                <button onClick={reset}>Reset</button>
                                <button onClick={() => increseBy(2)}>+2</button>
                                {
                                    isMaxCountReached && <button onClick={() => increseBy(-2)}>-2</button>
                                }
                            </>
                        )
                    }
                </ProductCard>
            </div>
        </div>
    )
}
