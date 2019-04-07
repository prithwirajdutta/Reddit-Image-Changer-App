/*
  Paste The code in https://jscomplete.com/playground and see it working !
*/

class App extends React.Component
{
  state = {name:"",kind:"",i:0}
  componentDidMount(){
 fetch(`https://www.reddit.com/r/aww.json`).then(res=>res.json()).then(data=>{this.setState({kind:data.data.children[0].data.thumbnail})}).catch(err=>console.log(err))
  }
handleClick = () => {
    this.setState({i:this.state.i + 1});
    let j = this.state.i
 fetch(`https://www.reddit.com/r/aww.json`).then(res=>res.json()).then(data=>{this.setState({kind:data.data.children[j].data.thumbnail})}).catch(err=>console.log(err))
  
  }
  render(){
    return(
      <div>
        <img src={this.state.kind} width="100" height="100" />
        <br/><br/>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}
ReactDOM.render(<App/>,mountNode);
