var React = require('react');
var {connect} = require('react-redux');

export var Login = () => {
  return (
    <div>
      <p>Login is working</p>
    </div>
  )
};

export default connect()(Login);
