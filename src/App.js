import React,{ Component, useState } from "react";
import "./app.css"
import Card from './Flashcard'
import DrawButton from "./drawbutton";
import axios from "axios"


class App extends Component{
  constructor(props){
    super(props);

    this.updateCard = this.updateCard.bind(this)

    this.state = {
      cards: [
        {id:1, termName: "TERM NAME: shovel", definition: "DEFINITION: garden tool"},
        {id:2, termName: "TERM NAME: snake", definition: "DEFINITION: garden reptile"},
        {id:3, termName: "TERM NAME: garden hat", definition: "DEFINITION: head garment to keep the sun off your face"},
        {id:4, termName: "TERM NAME: garden gloves", definition: "DEFINITION: you wear these to protect your hands from dirt."},
        {id:5, termName: "TERM NAME: rake", definition: "DEFINITION: item that spreads dirt or leaves"}
      ],
      currentCard:{}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }
  async getAllCards(){
    try{
      let response = await axios.get(
        "http://localhost:4000/api/flashcards/"
      );
      console.log(response.data);
      this.setState({
        front: response.data,
        back: response.data,
      });
    }catch (ex) {
      console.log(ex);
    }
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards
    this.setState({
      currentCard: this.getRandomCard(currentCards)
    })
    console.log('new card')
  }

  render(){
    return(
      <div>
        <div className="cardRow">
        <Card termName={this.state.currentCard.termName}
         definition={this.state.currentCard.definition}/>
        <DrawButton drawcard={this.updateCard}/>
        </div>
        
      </div>
    )
  }
}

export default App;
