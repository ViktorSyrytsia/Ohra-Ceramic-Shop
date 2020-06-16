import React from 'react';
import { Input, Menu } from 'semantic-ui-react'

const FilterPanel = ({ setFilterBy, filterBy, searchQuery, setSearchQuery }) => {

        const handleItemClick = (e, { name }) => {
                setFilterBy(name);
        }

        return (
                <div>
                        <Menu stackable>
                                <Menu.Item
                                        name='All'
                                        active={filterBy === 'All'}
                                        onClick={handleItemClick}
                                />
                                <Menu.Item
                                        name='Highest price'
                                        active={filterBy === 'Highest price'}
                                        onClick={handleItemClick}
                                />
                                <Menu.Item
                                        name='Lowest price'
                                        active={filterBy === 'Lowest price'}
                                        onClick={handleItemClick}
                                />
                                <Menu.Item
                                        name='Top rated'
                                        active={filterBy === 'Top rated'}
                                        onClick={handleItemClick}
                                />
                                <Menu.Menu position='right' >
                                        <Menu.Item>
                                                <Input
                                                        onChange={e => setSearchQuery(e.target.value)}
                                                        value={searchQuery}
                                                        icon='search'
                                                        placeholder='Search...' />
                                        </Menu.Item>
                                </Menu.Menu>
                        </Menu>
                </div>
        )
}
export default FilterPanel;

