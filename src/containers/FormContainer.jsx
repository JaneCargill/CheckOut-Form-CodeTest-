var React = require('react');
var FormList = require('../components/FormList')
var Bootstrap = require('bootstrap');
// var FormAddressDetail = require('../components/FormAddressDetail')

var FormContainer = React.createClass({
  
  
  render: function() {
    return(
      <div className='container'>
        <p id='formHeader'>Checkout form</p>
        <hr id='break1'/>
        <FormList />
       
     
      </div>
      );
  }
});

module.exports = FormContainer;