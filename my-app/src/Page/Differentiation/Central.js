import React, {Component} from 'react';
import {Card, Col, Row, Input, Button} from 'antd';
import axios from 'axios'
import 'antd/dist/antd.css';
import {compile, derivative, pow, abs} from 'mathjs';

const InputStyle = {
    background: "#fcffff",
    color: "black", 
    fontSize: "24px"
};
var y, error, exact;
class Central extends Component {
    datas = async(number)=>{
            
        var response = await axios.get('http://localhost:3001/api/users/showcentralmodel').then(res => {return res.data});
        this.setState({
            fx:response['data'][number]['fx'],
            x:response['data'][number]['x'],
            h:response['data'][number]['h'],
            degree:response['data'][number]['degree'],
        })
        this.centralh(this.state.x,this.state.h,this.state.degree);
    }
    constructor() {
        super();
        this.state = {
            fx: "",
            x: 0,
            h: 0,
            degree: 0,
            number: 0,
            showOutputCard: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    
    centralh(x, h, degree) {
        switch (degree) {
            case 1:
                y = (this.func(x+(1*h)) - this.func(x-(1*h))) / (2*h)
                break;
            case 2:
                y = (this.func(x+(1*h)) - 2*this.func(x) + this.func(x-(1*h))) / pow(h, 2)
                break;
            case 3:
                y = (this.func(x+(2*h)) - 2*this.func(x+(1*h)) + 2*this.func(x-(1*h)) - this.func(x-(2*h))) / (2*pow(h, 3))
                break;
            default:
                y = (this.func(x+(2*h)) - 4*this.func(x+(1*h)) + 6*this.func(x) - 4*this.func(x-(1*h)) + this.func(x-(2*h))) / pow(h, 4) 
        }
        exact = this.funcDiff(x, degree)
        error = abs((y - exact) / y)*100
        this.setState({
            showOutputCard: true
        })
    }

    func(X) {
        var expr = compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    funcDiff(X, degree) {
        var temp = this.state.fx, expr 
        for (var i=1 ; i<=degree ; i++) {
            temp = derivative(temp, 'x')
            expr = temp
        }
        
        let scope = {x:parseFloat(X)}
        return expr.eval(scope)
    }

    

    render() {
        return(
            <div>
            <h2 style={{color: "black", fontWeight: "bold"}}>Central O(h)</h2>
                <div>
                <Row>
                        <Col span={12}>
                    <Card
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2  style={{color: "black"}}>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2  style={{color: "black"}}>Order derivative</h2><Input size="large" name="degree" style={InputStyle}></Input>
                        <h2  style={{color: "black"}}>X</h2><Input size="large" name="x" style={InputStyle}></Input>
                        <h2  style={{color: "black"}}>H</h2><Input size="large" name="h" style={InputStyle}></Input><br/><br/>
                        <Button type="primary" size="large" id="submit_button" onClick= {()=>this.centralh(parseFloat(this.state.x), parseFloat(this.state.h), parseInt(this.state.degree))
                        } >Submit</Button>
                        
                    </Card>
                    </Col>

                        <Col span={12}>
                        <Card
                            title={"Input from Database"}
                            bordered={true}
                            style={{ width: 700 }}
                            onChange={this.handleChange}
                        >
                            <div>
                                <h2>Number</h2> <Input size="large" name="Number"></Input>
                            </div>

                            <br />
                            <Button
                                id="submit_button"
                                type="primary" 
                                size="large" 
                                onClick={() =>
                                    this.datas(
                                        parseFloat(this.state.number),
                                    )
                                }
                            >
                                Summit
                            </Button>
                        </Card>
                    </Col>   
                </Row>
                        
                    {this.state.showOutputCard && 
                        <Card
                        title={"Output"}
                        bordered={true}
                        style={{background: "#6efdfd", color: "black", float:"left"}}
                        id="outputCard"
                        >
                            <p style={{fontSize: "24px", fontWeight: "bold"}}>
                                y = {y.toFixed(8)}<br/>
                                Exact = {exact.toFixed(8)}<br/>
                                Error(ε) = {error.toFixed(4)}%<br/>
                            </p>
                        </Card>
                    }              
                </div>                
            </div>
        );
    }
}
export default Central;