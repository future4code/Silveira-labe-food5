import React from 'react'
import styled from 'styled-components'

const ImageSizing = styled.img`
max-width: 200px;
height: 200px;
`

const ProductsSection = (props) => {

    const menu = props.productsMenu.map((product) => {
        return (
            <div 
            key={product.id} 
            category={product.category}
            >
                <div>
                    <ImageSizing src = {product.photoUrl} alt={product.name} />
                </div>
                <h4> {product.name} </h4>
                <p> {product.description} </p> 
                <p> R${product.price.toLocaleString('pt-br', {minimumFractionDigits: 2})} </p> 
                <button onClick={() => console.log(product.id)}> Adicionar </button>
            </div> 
        )
    })

    return(
        <>
            <h4> Principais </h4>
            <hr/>
            {menu.filter((product) => {
                return (product.props.category !== "Acompanhamento" && product.props.category !== "Bebida")
            })}

            <h4> Acompanhamentos </h4>
            <hr/>
            {menu.filter((product) => {
                return (product.props.category === "Acompanhamento")
            })}

            <h4> Bebidas </h4>
            <hr/> 
            {menu.filter((product) => {
                return (product.props.category === "Bebida")
            })}
        </>
    )
}
export default ProductsSection;