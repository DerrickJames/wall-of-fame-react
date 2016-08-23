import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="main-content">
                <span className="header-label">About Page</span>
                <p className="content-body">This is the client-side implementation of the Wall Of Fame project using React, Redux and Webpack. It is meant to be a playground to test out different ideas and approaches gathered over time as a software developer from various books, articles and tutorials on large scale system architectures, API development, design patterns, best practices and generally the way I think about elegant code.</p>
            </div>
        );
    }
}

export default AboutPage;
