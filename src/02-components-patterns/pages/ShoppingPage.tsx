import ProductCard, { ProductButtons, ProductImage, ProductTitle } from "../components"

const product = {
    id: "1",
    title: "coffe Mug",
}

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
                {/*
                 Puedes usar las dos formas al mismo tiempo y ke daras mas
                 soporte a los usuarios o desarraolladores
                 /> */
                }


                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="mause" />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="mause" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
