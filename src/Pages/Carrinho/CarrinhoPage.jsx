import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import { GlobalStateContext } from '../../Context/GlobalStateContext';
import { InputContainer, ScreenContainer, StyledContainerPage } from '../../Styles/Styled';
import { StyledAdress, StyledHr, StyledPagamento, StyledTotalPrice } from './Styled';
import Button from '@material-ui/core/Button';

function Carrinho () {
    const { data } = useContext(GlobalStateContext);
    const { setNameHeader, setButtonBack } = data;
    const [ pagamento, setPagamento ] = useState({cartao: false, dinheiro: false});

    useEffect(() => {
        setNameHeader("Meu Carrinho");
        setButtonBack(false);
    },[]);

    const onChangeDinheiro = (e) => {
        setPagamento({cartao: false, dinheiro: true})
    }

    const onChangeCartao = (e) => {
        setPagamento({cartao: true, dinheiro: false})
    }

    return (
        <ScreenContainer>
            <Header/>
            <StyledAdress>
                <div className='text-adress'>
                    <p className='text'>Endereço de entrega</p>
                    <p className='adress'>Endereço de entrega</p>
                </div>
            </StyledAdress>
            <InputContainer>
                <p>Carrinho vazio</p>
                <StyledContainerPage>
                    <StyledTotalPrice>
                        <div className='frete'>
                            <p>Frete: R$0,00</p>
                        </div>
                        <div className='total'>
                            <p>SUBTOTAL:</p>
                            <p className='valor'>R$0,00</p>
                        </div>
                        <div className='forma-pagamento'>
                            <p>Forma de pagamento</p>
                        </div>
                        <StyledHr/>
                    </StyledTotalPrice>
                    <StyledPagamento>
                        <div className='input-pagamento'>
                            <div>
                                <input name="dinheiro" value={pagamento} onChange={onChangeDinheiro} type='radio' checked={pagamento.dinheiro}/>
                                <label for="dinheiro" >Dinheiro</label>
                            </div>
                            <div>
                                <input name="cartao" value={pagamento} onChange={onChangeCartao} type='radio' checked={pagamento.cartao}/>
                                <label for="cartao">Cartão</label>
                            </div>
                        </div>
                        
                    </StyledPagamento>
                    <Button
                        fullWidth 
                        variant={"contained"} 
                        color={"secondary"} 
                        margin={"normal"}
                        type={"submit"}
                    >
                        Confirmar
                    </Button>
                </StyledContainerPage>
            </InputContainer>
        </ScreenContainer>
    );
};

export default Carrinho;