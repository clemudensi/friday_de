import { fireEvent, render } from '@testing-library/react';
import { Dropdown } from './dropdown';
import { vehicleMake } from 'fixtures';

const handleOnChange = jest.fn();

const renderComponent = () =>
    render(
        <Dropdown
            cars={vehicleMake}
            onChange={handleOnChange}
            name="cars"
        />
    );


describe('<Dropdown/>', () => {
    it('renders without crashing', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId('drop-down-cars')).toBeInTheDocument();
    });

    describe('Select option', () => {
        it('it renders select option items', () => {
            const { getByTestId, getAllByTestId } = renderComponent();
            fireEvent.change(getByTestId('drop-down-cars'), { target: { value: 'AUDI' } });

            let options = getAllByTestId('select-option')
            expect(options[0].selected).toBeFalsy();
            expect(options[1].selected).toBeTruthy();
            expect(options[2].selected).toBeFalsy();
        });
    });
});