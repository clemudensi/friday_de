import { VFC } from 'react';
import { SelectMenu } from 'components';

interface CarListProps {
    cars?: Array<string>;
    onChange: (arg: React.ChangeEvent<HTMLSelectElement>) => void;
    name?: string;
}

const Dropdown: VFC<CarListProps> = ({ cars, onChange, name }) => {
    return (
        <SelectMenu onChange={onChange} name={name}>
            {
                cars?.map((car, index) => <option key={index} value={car}>{car}</option>)
            }
        </SelectMenu>
    )
};

export { Dropdown };