import React , {Component} from 'react';
import './App.css';
import {Line} from 'react-chartjs-2';
import DataProvider from './DataProvider';
import Bounce from './Bounce';


class App extends Component {
constructor(){
  super();
  this.state={
    bounce:0,
    Height:0,
    Cor:0,
    data :{
      labels:["t1","t2","t3","t4","t5","t6","t7","t8"],
      datasets : [
      {
        label : "Ball Path",
        backgroundColor: "rgba(255,0,255,0.75)",
        data: []

      }]
    }
  }
}

onHeightChange=(event)=>{
  console.log()
  this.setState({
      Height:event.target.value
  })
}
onCorChange=(event)=>{
  this.setState({
    Cor:event.target.value
  })
}
onSubmit=()=>{
  var i =1;
  var h = this.state.Height;
  const c =this.state.Cor;
  const arr=[h,0];
  var t = Math.pow((2*h/10),0.5);
  console.log(t);
  const time =[0];
   time.push(t.toFixed(3));

  while(h>0.01){
    i++;
    h=Math.pow(c,2)*h;
    arr.push(h);
    arr.push(0);
    var k = Math.pow((2*h/10),0.5);
    console.log(k);
    t=t+k;
    time.push(t.toFixed(3));
    console.log(t);
    t=t+k;
    time.push(t.toFixed(3));

  }
  this.setState({
    bounce:i,
    data:{
      labels:[...time],
      datasets : [
      {
        label : "Ball Path",
        backgroundColor: "rgba(255,0,255,0.75)",
        data: [...arr]

      }]
    }
  })


}

  render(){
   return ( 
    <div style={{position:"relative", width:"80vw",height:"80vh"}}>
    <h1 > Bouncy Balll </h1>
    <DataProvider 
     onHeightChange={this.onHeightChange}
     onCorChange = {this.onCorChange} 
     onSubmit ={this.onSubmit}  />
    <Bounce bounce={this.state.bounce}/>
    <Line 
       options= {{
        responsive:true,
         scales: {
             yAxes: [{
                 scaleLabel: {
                       display: true,
                      labelString: 'Height in meter'
        }
    }],
    xAxes: [{
                 scaleLabel: {
                       display: true,
                      labelString: 'Time in sec'
        }
    }]
  }   
      }}
      data={this.state.data}
      />
    </div>
    )
  }
}


export default App;
