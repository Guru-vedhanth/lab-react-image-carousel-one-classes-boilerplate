import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";



// implement the class below
class Carousel extends Component {
  constructor(){
    super();
    this.state={
        count: 0
    }
  }
    plus(){
        if (this.state.count!=2){this.setState({
            count:this.state.count+1
    })}
}

    minus(){
        if (this.state.count!=0){
            this.setState({
                count:this.state.count-1
            })
        }
    }

  
  render(){
    const faces={
        backgroundImage:`url(${images[this.state.count].img})`,
    }
    
    return(
    <>
    
    <div className="container" style={faces}>
                <div className="left-arrow" onClick={()=>this.minus()}><ArrowBackIosIcon id="arrow" /></div>
                <div className="container-2">
                    <div className="title-box">{images[this.state.count].title}</div>
                    <div className="subtitle-box">{images[this.state.count].subtitle}</div>
                </div>
                <div className="right-arrow" onClick={()=>this.plus()}><ArrowForwardIosIcon  id="arrow"/></div>
    </div>
    </>
    
    )
  }
}

export default Carousel;