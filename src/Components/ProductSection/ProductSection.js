import React from 'react'
import styled from 'styled-components'
import { InputContainer, StyledButtonCard, StyledCard, StyledContainerPage, StyledDivButton, StyledDivCardInfo, StyledDivQtde, StyledImgCard, StyledInputDesc, StyledSections } from '../../Styles/Styled'

const ImageSizing = styled.img`
max-width: 50px;
height: 50px;
`

const ProductsSection = (props) => {

    const menu = props.products.map((product) => {
        return (
            <StyledCard 
                key={product.id} 
                category={product.category}
            >
                <StyledImgCard>
                    <img src = {product.photoUrl} alt={product.name} />
                </StyledImgCard>
                <StyledDivCardInfo>
                    <StyledInputDesc>
                        <p className='name'> {product.name} </p>
                        <p className='description'> {product.description} </p>
                    </StyledInputDesc>
                    <StyledDivButton>
                        <div className='price'>
                            <p> R${product.price.toLocaleString('pt-br', {minimumFractionDigits: 2})} </p> 
                        </div>
                        <StyledButtonCard onClick={() => console.log(product.id)}> Adicionar </StyledButtonCard>
                    </StyledDivButton>
                </StyledDivCardInfo>
            </StyledCard> 
        )
    })

    return(
        <InputContainer>
            <StyledSections>
                <h4> Principais </h4>
                <hr/>
            </StyledSections>
            {menu.filter((product) => {
                return (product.props.category !== "Acompanhamento" && product.props.category !== "Bebida")
            })}
            
            <StyledSections>
                <h4> Acompanhamentos </h4>
                <hr/>
            </StyledSections>
            
            {menu.filter((product) => {
                return (product.props.category === "Acompanhamento")
            })}
            <StyledSections>
                <h4> Bebidas </h4>
                <hr/> 
            </StyledSections>
            {menu.filter((product) => {
                return (product.props.category === "Bebida")
            })}
        </InputContainer>
    )
}
export default ProductsSection;