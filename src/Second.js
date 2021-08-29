import React from "react";

class PvComponent extends React.Component{
  constructor()
  {
    super();
    this .state={i:0, pv:[11,22,33,44,55,66,77,88,99]};

  }

  IncCount=()=>
  {
    this.setState({i:this.state.i+1});
    if(this.state.i==8)
    {
      this.setState({i:0});
    }

  }
  render()
  {
    return(
<div>
  the value of i is : {this.state.i}<br></br><br></br>
  the value of array elemeng is : {this.state.pv[this.state.i]};
  <br></br><br></br>
  <button onClick={this.IncCount}> PVSC</button>
</div>
    )
  }
}

export default PvComponent;