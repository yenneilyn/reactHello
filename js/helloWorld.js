class HelloWorld extends React.Component {
	render() {
		return <div>Hello {this.props.name}!</div>;
	}
}


ReactDOM.render(
	<HelloWorld name="World"/>,
	document.querySelector('.hello-world')
);


