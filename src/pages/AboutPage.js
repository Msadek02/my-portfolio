import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Mostafa Sadek. i'm a full stack developer with experience in JavaScript, JQuery, Express JS, Node JS, Ruby on Rails, MySQL, MongoDB and ReactJS </p>

                <p>I’m experienced in leveraging few languages to provide a synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </p>

                <p>I recently wrapped up a full stack flex program in web development at UNC Charlotte BootCamp and now i’m looking for opportunities to build applications with fast paced and growing company.</p>

                <p>I’m a web developer specializing in testing, website maintenance, and tech support for small businesses. I’m thrilled about this job opportunity and look forward to the opportunity to work with your team.</p>
            </Content>
        </div>
    );
}

export default AboutPage;