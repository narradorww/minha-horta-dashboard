import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const ButtonBox = styled(Button)({
    fontSize: '3.5rem',
    fontweight: 'bold',
    textShadow: '0px 0px 10px #000000',
    backdropFilter: 'blur(10px)',
        color: 'white',
    backgroundcolor: 'white',
    border: '6px solid white',
    '&:hover' :{
        backgroundcolor: 'white',
        color: 'white',
        border:'12px solid white',
    }

});

export default ButtonBox;