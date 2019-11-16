class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    increaseValue = () => {
        this.setState({count: this.state.count + 1 });
    }
    decreaseValue = () => {
        this.setState({count: this.state.count - 1})
    }
    render() {
        return <div>
            <h1>React Counter</h1>
            <p>{this.state.count}</p>
            <button onClick={ this.increaseValue }>+1</button>
            <button onClick={ this.decreaseValue }>-1</button>
        </div>  
    }
}

ReactDOM.render(<Counter />, document.getElementById('root'))