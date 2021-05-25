import React, {useContext} from 'react';
import { Container } from './styles';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

interface Props{
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({toggleTheme}) => {

    const { colors, title } = useContext(ThemeContext);

return(
    <Container>
        Who Is
        <Switch onChange={toggleTheme}
            checked={title === 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            onColor={colors.secundary}
            offColor={colors.secundary}
        />
    </Container>

);
};

export default Header;