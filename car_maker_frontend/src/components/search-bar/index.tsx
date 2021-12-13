import { VFC } from 'react';
import * as Styled from 'components';
import { IconProps } from 'types';

interface SearchBarProps extends IconProps {
    handleClearText?: () => void;
    inputValue: string;
    onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    searchInput: React.MutableRefObject<HTMLInputElement| null>;
}

const SearchBar: VFC<SearchBarProps> = ({
    color,
    cursor,
    inputValue,
    onChange,
    handleClearText,
    searchInput,
    size
}) => {
    return (
        <Styled.Container>
            <Styled.SearchBarContainer>
                <Styled.TextInput
                    value={inputValue}
                    onChange={onChange}
                    placeholder="Search"
                    type="text"
                    ref={searchInput}
                />
                <Styled.ContainerEnd>
                    {
                        inputValue?.length ?
                        <Styled.CancelIcon
                            size={size}
                            onClick={handleClearText}
                            color={color}
                            cursor={cursor}
                        /> : null
                    }
                </Styled.ContainerEnd>
            </Styled.SearchBarContainer>
        </Styled.Container>
    )
};

export { SearchBar };