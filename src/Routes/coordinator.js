

export const goToPage = (navigate, pageIndex) => {    
    navigate(pageIndex); 
}

export const goToHomePage = (navigate) => {
    navigate('/home');
}

export const goBack = (navigate) => {
    navigate(-1);
}

export const goToLogin = (navigate) => {
    navigate("/login");
}

export const CadastroPage = (navigate) => {
    navigate("/cadastro")
}

export const RestaurantDetail = (navigate, id) => {
    navigate(`restaurante/${id}`)
}

export const goToEndereco = (navigate) => {
    navigate("/endereco")
}

export const goToRestaurante = (navigate, id) => {
    navigate(`/restaurante/${id}`);
}