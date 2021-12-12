import { VFC } from 'react';
import * as Styled from 'components';
import { IconProps } from 'types';

interface SearchBarProps extends IconProps {
    cancelSearch?: () => void;
    focused: boolean | unknown;
    handleClearText?: () => void;
    inputValue: string;
    onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: () => void;
    searchInput: React.MutableRefObject<HTMLInputElement| null>;
}

const SearchBar: VFC<SearchBarProps> = ({
    cancelSearch,
    color,
    cursor,
    focused,
    inputValue,
    onChange,
    handleClearText,
    onFocus,
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
                    onFocus={onFocus}
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
            {
                (focused ?? inputValue) &&
                    <Styled.CancelContainer
                        onClick={cancelSearch}
                    >
                        cancel
                    </Styled.CancelContainer>
            }
        </Styled.Container>
    )
};

export { SearchBar };