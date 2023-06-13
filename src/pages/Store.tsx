import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { StoreItem } from '../components/StoreItem';

interface ShopItem {
    id: number;
    title: string;
    price: number;
    image: string;
    title: string;
}

export const Store: React.FC = () => {
    const [items, setItems] = useState<ShopItem[]>([
        { id: 1, image: 'https://myalpins.com/1689-large_default/nike-air-jordan-1-mid-chicago-black-toe.jpg', title: 'Product 1', price: 9.99 },
        { id: 2, image: 'https://myalpins.com/1683-large_default/nike-air-jordan-1-mid-blu.jpg', title: 'Product 2', price: 19.99 },
        { id: 3, image: 'https://myalpins.com/1535-large_default/nike-air-jordan-1-mid-laser-orangeblack.jpg', title: 'Product 3', price: 29.99 },
        { id: 4, image: 'https://myalpins.com/1690-large_default/nike-air-jordan-1-mid-bianca.jpg', title: 'Product 4', price: 39.99 },
        { id: 5, image: 'https://myalpins.com/1690-large_default/nike-air-jordan-1-mid-bianca.jpg', title: 'Product 5', price: 49.99 }
    ]);



    return (
        <div className="container">
            <h1>Fake Shop List</h1>
            <div className="row">
                {items.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <Row className="g-3" md={2} xs={1} lg={3}>
                        {items.map((item) => (
                            <Col key={item.id}>
                                <StoreItem {...item} />
                            </Col>

                        ))}
                    </Row>
                )}
            </div>
        </div>
    );
};
