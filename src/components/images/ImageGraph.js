import React,{Component} from 'react';
import imgGrafo from './imagemGrafo.jpg'
import './ImageGraph.css'

class ImageGraph extends Component{
  constructor(props){
    super(props);
    
  }
  componentDidMount(){
  }
  
  render(){
    const SS = 30;
    console.log(this.props.gamestatus.nodes);
    this.nodes = JSON.parse(this.props.gamestatus.nodes);
    console.log(this.nodes);
    let eNodes = this.nodes.map(node=>{
      let eItems = 
        node.items.map((item,k) => {
          return (<div key={item+k} className="item">{item}</div>)
        })

      return (
      <div key={node.node} className="node" style={{"top": (node.y*SS), "left": (node.x*SS)}}>
        <div className="nodeId">{node.node}</div>
      {eItems}
        </div>)
    });

    return(
        <div className="map">
        {eNodes}
        </div>
    )
  }
}
export default ImageGraph;