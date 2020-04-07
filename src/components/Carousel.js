import React from 'react';
import Card from '../components/Card';
import Bamazon from '../assets/images/Bamazon.png';
import Burger from '../assets/images/burger.png';
import CharlotteDiscgolf from '../assets/images/Charlotte_discgolf.png';
import FriendFinder from '../assets/images/friendFinder.png';
import MHYL from '../assets/images/mountHollyYouthLeagues.png';
import trainScheduler from '../assets/images/trainScheduler.png';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Mount Holly Youth League',
                    subTitle: 'A web application designed for the town of Mount Holly, NC',
                    imgSrc: MHYL,
                    link: 'https://mtholly-youthleague-portal.herokuapp.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'BURGER',
                    subTitle: 'Eat-Za-Burger!, waiting to be devoured.',
                    imgSrc: Burger,
                    link: 'https://eatzaburger1.herokuapp.com/index',
                    selected: false
                },
                {
                    id: 2,
                    title: 'CHARLOTTE DISC GOLF',
                    subTitle: 'A full stack application that allows user to track their scores at disc golf',
                    imgSrc: CharlotteDiscgolf,
                    link: 'http://stormy-scrubland-88373.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'BAMAZON',
                    subTitle: 'A Node.js & MySQL digital storefront',
                    imgSrc: Bamazon,
                    link: 'https://github.com/Msadek02/Bamazon',
                    selected: false
                },
                {
                    id: 4,
                    title: 'FriendFinder',
                    subTitle: 'A fullstack match making application using the Express package for Node.js!',
                    imgSrc: FriendFinder,
                    link: 'https://friendfinder0204.herokuapp.com/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'TRAIN SCHEDULER',
                    subTitle: 'Train scheduler',
                    imgSrc: trainScheduler,
                    link: 'https://msadek02.github.io/Train-Scheduler/',
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