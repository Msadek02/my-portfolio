import React from 'react';
import Card from '../components/Card';
import Certification from '../assets/images/Certification.jpg';
import OneGoodThing from '../assets/images/OneGoodThing.jpg';
import UNCC from '../assets/images/UNCC.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Mostafa Sadek',
                    subTitle: 'Lorem',
                    imgSrc: Certification,
                    link: '',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Graduation',
                    subTitle: 'Graduation Picture',
                    imgSrc: UNCC,
                    link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Happy',
                    subTitle: 'A social network for developers',
                    imgSrc: OneGoodThing,
                    link: 'https://github.com/Msadek02/my-portfolio',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;