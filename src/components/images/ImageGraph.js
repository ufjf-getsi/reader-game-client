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
    const SS = 60;
    this.nodes = JSON.parse(this.props.gamestatus.nodes);
    let eNodes = this.nodes.map(node=>{
      let players = this.props.gamestatus.jogadores.filter(player=>player.position===node.node);
      let itens = this.props.gamestatus.itens.filter(item=>item.node===node.node);

      let eItems = 
      itens.map((item,k) => {
        item.data2 = JSON.parse(item.data);
        return (<div key={item.data2.name + k} className={"item " + item.data2.type + " " + item.data2.name}></div>)
        })

      let ePlayers = 
      players.map((pl,k) => {
        return (<div key={pl.name+k} className={"player team"+pl.team}>{pl.name}</div>)
        })

      return (
      <div key={node.node} className="node" style={{"top": (node.y*SS), "left": (node.x*SS)}}>
        <div className="nodeId">{node.node}</div>
      {eItems}
      {ePlayers}
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