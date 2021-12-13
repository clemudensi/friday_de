import { styled } from 'theme';
import { keyframes } from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	margin: ${({ theme }) => `0 ${theme.factor(2)}`};
`;

const ContainerCenter = styled.div`
	text-align: center;
    width: -webkit-fill-available;
`;

const ContainerEnd = styled.div`
	margin-left: auto;
`;

const ContainerStart = styled.div`
	align-items: flex-start;
`;

const SectionContainer = styled.div`
	padding: ${({ theme }) => `${theme.factor(4)} 0`};
	display: flex;
`;

const Title = styled.h2`
	font-weight: 600;
	line-height: 1.3;
	font-size: 2rem;
`;

const Subtitle = styled.h3`
	line-height: 1.5;
	font-size: 1.5rem;
	font-weight: 500;
	padding: ${({ theme }) => `0 ${theme.factor(2)}`};
`;

const CancelContainer = styled.div`
	padding: ${({theme}) => theme.factor(2)};
	width: 15%;
	cursor: pointer;
	text-align: center;
`;

const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .4rem;
    border: 1px solid grey;
    &:hover {
    box-shadow: 1px 1px 1px thistle;
    }
`;

const InputContainer = styled.div`
    display: contents;
    flex-wrap: wrap;
    flex: 1 0;
    align-items: center;
    min-width: 0;
`;

const ListContainer = styled.ul`
    padding: 1rem;
	margin: 0;
	padding-left: 1em;
	background: #ffffff;
	border: 2px solid #e5e5e5;
	box-sizing: border-box;
	color: #3faffa;
	font-size: 1rem;
	font-weight: 500;
	width: 50%;
`;

const ListItems = styled.li`
	list-style: none;
	margin-bottom: 0.8em;
	cursor: pointer;
`;

const TextInput = styled.input`
    flex: 1 0;
    min-width: 3.125rem;
    min-height: 1.5rem;
    font-size: inherit;
    background-color: transparent;
    padding-left: .5rem;
    border: 0;
    &:focus {
    	outline: none;
    }
`;

const VehicleDetails = styled.div`
	font-size: 0.8rem;
	color: #000;
	background: #F8F8F8
`;

const SelectMenu = styled.select`
	padding: .5rem 1rem;
	border: 1px solid grey;
`;

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
	animation: ${rotate360} 1s linear infinite;
	transform: translateZ(0);
	border-top: 2px solid blue;
	border-right: 2px solid blue;
	border-bottom: 2px solid blue;
	border-left: 4px solid admiral;
	background: transparent;
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
`;

export {
    CancelContainer,
	Container,
	ContainerCenter,
	ContainerEnd,
	ContainerStart,
    InputContainer,
    ListContainer,
    ListItems,
    SearchBarContainer,
	SectionContainer,
	SelectMenu,
	Spinner,
	Subtitle,
    TextInput,
	Title,
	VehicleDetails
};