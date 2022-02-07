import React, { Component } from 'react';

export default class Scoreboard extends Component {

    constructor()
    {
        super();
        this.state={
            player1:0,
            player2:0,
            status1:false,
            status2:false,
            flag:1
        }
    }

    player1_changeScore = () => {
        let incr=Math.round(Math.random()*10);
        let prev=this.state.player1;
        let sum=prev+incr;

        if(this.state.flag===1){
            if(sum>50)
            {
                alert(`Player 1 score is ${sum} more than 50`);
                this.setState({
                    player1:this.state.player1-(Math.round(Math.random()*10)),
                    flag:2
                })
            }
            else if(sum<50){
                this.setState({
                    player1:this.state.player1+incr,
                    flag:2
                })
            }
            else if(sum===50)
            {
                this.setState({
                    player1:sum
                })
                alert("Player 1 wins");
                this.state.status1=true;
                this.reset();
            }
        }
        else
        {
            alert("Player 2's turn");
        }
        
        
    }

    player2_changeScore = () => {
        let incr=Math.round(Math.random()*10);
        let prev=this.state.player2;
        let sum=prev+incr;

        if(this.state.flag===2){
                if(sum>50)
                {
                    alert(`Player 2 score is ${sum} more than 50`);
                    this.setState({
                        player2:this.state.player2-(Math.round(Math.random()*10)),
                        flag:1
                    })
                }
            else if(sum<50){
                this.setState({
                    player2:this.state.player2+incr,
                    flag:1
                })
            }
            else
            {
                this.setState({
                    player2:sum
                })
                alert("Player 2 wins");
                this.state.status2=true;
                this.reset();
            }
        }
        else
        {
            alert("Player 1's turn");
        }
    }

    reset=()=>{
        this.setState({
            player1:0,
            player2:0,
            status1:false,
            status2:false,
            flag:1
        })
    }




  render() {
    return(
        <div className="Outer-div-of-scorecard CompleteScoreCard">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card Scorecard1">
                        <div className="card-body">
                            <h5 className="card-title name">Player 1</h5>
                            <p className="card-text score">{this.state.player1}</p>
                        </div>
                        <button type="button" className="btn btn-dark button_name" onClick={this.player1_changeScore}>Click Me</button>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card Scorecard2">
                        <div className="card-body">
                            <h5 className="card-title name">Player 2</h5>
                            <p className="card-text score">{this.state.player2}</p>
                        </div>
                        <button type="button" className="btn btn-dark button_name" onClick={this.player2_changeScore}>Click me</button>
                    </div>
                </div>
                <button type="button" className="btn btn-light reset-button" onClick={this.reset}>RESET</button>
            </div>
        </div>
    )
  }
}
