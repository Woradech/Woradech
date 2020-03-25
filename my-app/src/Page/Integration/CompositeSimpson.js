import React, { Component } from 'react'
import Axios from 'axios'
import {Card, Row, Col, Input, Button} from 'antd';
import 'antd/dist/antd.css';
import {compile, abs} from 'mathjs';
var Algebrite = require('algebrite')

const InputStyle = {
    background: "#fcffff",
    color: "black", 
    fontSize: "24px"
};

var I, exact, error;
class CompositeSimpson extends Component {
    datas = async(number) =>{
        var response = await Axios.get('http://localhost:3001/api/users/showcomsimpsonmodel').then(res => {return res.data});
            this.setState({
                fx:response['data'][number]['fx'],
                a:response['data'][number]['a'],
                b:response['data'][number]['b'],
                n:response['data'][number]['n']
            })
            this.composite_simpson(this.state.a,this.state.b,this.state.n);
    }
    constructor() {
        super();
        this.state = {
            fx: "",
            a: 0,
            b: 0,
            n: 0,
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
    composite_simpson(a, b, n) {
        var h = (b-a)/n
        I = (h / 3) * (this.func(a) + this.func(b) + 4*this.summationFunction(1, n, h) + 2*this.summationFunction(2, n, 2*h))
        exact = this.exactIntegrate(a, b)
        error = abs((exact-I) / exact) * 100
        this.setState({
            showOutputCard: true
        })
    }
    exactIntegrate(a, b) {
        var expr = compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({x:b}) - expr.eval({x:a})

    }
    summationFunction(start, n, h) {
        var sum = 0
        if (start % 2 === 0) {
            n += 2
        }
        var xi = parseInt(this.state.a) + h
        for (var i=start ; i<n ;) {
            i+=2
            sum += this.func(xi)
            xi = parseInt(this.state.a) + i*h
            alert(i*h)
            
        }
        
        return sum
    }
    func(X) {
        var expr = compile(this.state.fx);
        let scope = {x:parseFloat(X)};
        return expr.eval(scope);        
    }
    render() {
        return(
            <div>
                <h2 style={{color: "black", fontWeight: "bold"}}>Composite Simpson's Rule</h2>
                <div>
                    <Row>
                        <Col span={12}>
                    <Card
                    onChange={this.handleChange}
                    id="inputCard"
                    >
                        <h2>f(x)</h2><Input size="large" name="fx" style={InputStyle}></Input>
                        <h2>Lower bound (A)</h2><Input size="large" name="a" style={InputStyle}></Input>
                        <h2>Upper bound (B)</h2><Input size="large" name="b" style={InputStyle}></Input>
                        <h2>N</h2><Input size="large" name="n" style={InputStyle}></Input><br/><br/>
                        <Button type="primary" size="large" id="submit_button" onClick= {()=>this.composite_simpson(parseInt(this.state.a), parseInt(this.state.b), parseInt(this.state.n))
                        }>Submit</Button>
                        
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
                        style={{width: "100%", background: "#2196f3", color: "#FFFFFFFF", float:"left"}}
                        id="outputCard"
                        >
                            <p style={{color: 'black', fontSize: '24px'}}>
                                Approximate = {I}<br/>
                                Exact = {exact}<br/>
                                Error = {error}%
                            </p>
                        </Card>
                    }              
                </div>                
            </div>
        );
    }
}

export default CompositeSimpson
