import { VFC } from 'react';
import { ListContainer, ListItems, SectionContainer, VehicleDetails } from 'components';
import { Cars } from 'types';

interface CarListProps {
    activeCollapse: string;
    cars?: Cars [];
    handleExpandCollapse?: (arg: string) => void;
}

const CarList: VFC<CarListProps> = ({ activeCollapse, cars, handleExpandCollapse }) => {
    return (
        <SectionContainer>
            <ListContainer>
                {
                    cars?.map((car, index) =>
                        <div onClick={() => handleExpandCollapse && handleExpandCollapse(`${index}`)} key={index}>
                            <ListItems>
                                <strong>{car?.make}</strong> - {car?.model}
                            </ListItems>
                            { index === parseInt(activeCollapse) &&
                                <VehicleDetails>
                                    <p><strong>Body-Type:</strong> {car?.bodyType}</p>
                                    <p><strong>Engine-Capacity:</strong> {car?.engineCapacity}</p>
                                    <p><strong>Engine-Power-KW:</strong> {car?.enginePowerKW}</p>
                                    <p><strong>Engine-Power-PS:</strong> {car?.enginePowerPS}</p>
                                    <p><strong>Fuel:</strong> {car?.fuelType}</p>
                                    <p><strong>Make:</strong> {car?.make}</p>
                                    <p><strong>Model:</strong> {car?.model}</p>
                                </VehicleDetails>
                            }
                        </div>
                    )
                }

            </ListContainer>
        </SectionContainer>
    )
};

export { CarList };