import Button from 'react-bootstrap/Button'


export const Botao = ({texto, cor}) =>{
    return(
        <Button style={{
            backgroundColor: cor,
            color: '#fff'
          }}> {texto} </Button>
    );
}

export const Botao2 = ({texto, cor}) =>{
    return(
        <Button style={{
            backgroundColor: cor,
            color: 'yellow'
          }}> {texto} </Button>
    );

}