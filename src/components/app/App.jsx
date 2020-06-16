import React, { useEffect, useState } from 'react';
import Header from '../../containers/Header';
import ItemCard from '../../containers/ItemCard';
import FilterPanel from '../../containers/FilterPanel';

import axios from 'axios';

import { Container, Card } from 'semantic-ui-react';
import './app.scss'




const App = ({ setItems, itemsList, isReady }) => {

        const [width, setWidth] = useState(window.innerWidth);
        const [columns, setColumns] = useState(4);

        useResponse(setWidth, width, setColumns);

        useEffect(() => {
                axios.get('/items.json')
                        .then(({ data }) => { setItems(data) })
                        .catch((err) => { console.log(err) })
        }, [])



        return (
                <Container>
                        <div className='header'>
                                <Header />
                                <FilterPanel />
                        </div>
                        <Card.Group itemsPerRow={columns}>
                                {!isReady ? 'Loading...' : itemsList.map(item => (<ItemCard key={item.id} item={item} />))}
                        </Card.Group>
                </Container>

        )
}
export default App;




const useResponse = (setWidth, width, setColumns) => {
        useEffect(() => {
                const handleResize = () => setWidth(window.innerWidth);
                window.addEventListener('resize', handleResize);
        })
        useEffect(() => {
                const handleColums = (width) => {
                        if (width > 1600) {
                                return 4
                        } else if (width > 750) {
                                return 3
                        } else return 1
                }
                setColumns(handleColums(width))
        })
}

