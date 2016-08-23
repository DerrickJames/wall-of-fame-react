import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="landing-page-content">
                <div className="jumbotron">
                    <h1>Home of badass Ninjas</h1>
                    <p>
                        Brag your skills and let the world know you're a kickass problem solver.
                    </p>
                    <div className="text-center">
                        <Link to="about" className="btn btn-lg landing-page-btn">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
