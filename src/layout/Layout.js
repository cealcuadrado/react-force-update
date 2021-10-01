import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.forceMathUpdate = this.forceMathUpdate.bind(this);
    }
    
    forceMathUpdate() {
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.forceMathUpdate}>
                    Force Update
                </button>
                <hr />
                <p>Math.random(): {Math.random()}</p>
            </div>
            
        );
    }
}

export default Layout;