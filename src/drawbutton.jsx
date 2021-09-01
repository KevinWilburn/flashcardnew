import React, { Component } from 'react';
import './drawbutton.css';

class DrawButton extends Component {
    constructor(props) {
        super(props);

        this.drawcard = this.drawcard.bind(this)
    }

    drawcard(){
        this.props.drawcard();
    }

    render(props){
        return(
            <div className="buttonContainer">
                <button className="button" onClick={this.drawcard}>Draw card</button>
            </div>
        )
    }
}

export default DrawButton;