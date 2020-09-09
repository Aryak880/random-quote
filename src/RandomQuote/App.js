import React from 'react';
import Draggable from 'react-draggable';
import RandomQuote from './randomQuote';
import RandomImage from './imageComponent';
import HandleEvents from './handleEvents';
import './style.css';

const apiKey = 'eN_XkIO4g6zMAQsUe2q6GaA2mrVpOHORAaHaOrJ0-ao';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      author: "",
      content: "",
      isLoadingText: true,
      url: "",
      isLoadingImg: false,
      color: "#000",
      photographer: ''
    }

    this.handleClickText = this.handleClickText.bind(this);
    this.handleClickImg = this.handleClickImg.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data =>
      this.setState({
        author: data.author,
        content: data.content,
        isLoadingText: false
      })).catch((err) => {
        console.log(err);
    });

      fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}&orientation=landscape`)
        .then(res => res.json())
        .then(data => 
          this.setState({
            url: data.urls.full,
            photographer: data.user.first_name + " " + data.user.last_name === null ? "" : data.user.last_name ,
            isLoadingImg: false
        })).catch((err) => {
          console.log(err);
      });
  }

  handleClickImg(){
    this.setState({
      isLoadingImg: true
    });

    fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}&orientation=landscape`)
        .then(res => res.json())
        .then(data => this.setState({
            url: data.urls.full,
            photographer: data.user.first_name + " " + data.user.last_name,
            isLoadingImg: false
        })).catch((err) => {
          console.log(err);
      });
  }

  handleClickText(){
    this.setState({
      isLoadingText: true
    })

    fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data =>
      this.setState({
        author: data.author,
        content: data.content,
        isLoadingText: false
      })).catch((err) => {
        console.log(err);
    });
  }

  handleChange(event){
      const {name, value} = event.target;
      this.setState({
        [name] : value
      })
  }
  
  render() {
    return (
      <div className="container">
        <div className="alert alert-success" role="alert">
          <h3>Generate random quote!</h3>
          take screenshot and share it!😉
        </div>
        
        <Draggable>
          <div className="drag-box">
                {
                    this.state.isLoadingText ? "Loading..." :
                    <RandomQuote
                      author={this.state.author}
                      content={this.state.content}
                      color={this.state.color}
                    />
                }
          </div>
        </Draggable>   
          <div className="RandomImage">
            {
                this.state.isLoadingImg ? <h2>Loading...</h2> :
                <RandomImage 
                url={this.state.url} 
              />          
            }
          </div>
            
            <div className="eventAndFooter">
                <HandleEvents 
                    handleClickText={this.handleClickText}
                    handleClickImg={this.handleClickImg}
                    handleChange={this.handleChange}
                />

                <footer>
                  devloped by &copy;Aryak Singh chauhan <br />
                  photo by &copy; {this.state.photographer} on Unsplash
                </footer>
            </div>
        </div>
    )
  }
}


export default App;
