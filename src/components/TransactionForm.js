import React, { Component } from 'react'

 class TransactionForm extends Component {
     state = {
         ...this.returnStateObject()
     }

     returnStateObject() {
         if (this.props.currentIndex == -1)
             return {
                 bAccountNo: '',
                 iFSC: '',
                 bName: '',
                 amount: ''

             }
         else {
             return this.props.list[this.props.currentIndex]

         }
     }

     componentDidUpdate(prevProps){
    if(prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
        this.setState({...this.returnStateObject()})
     }

     handleInputChange = e => {
         this.setState({
             [e.target.name] : e.target.value
         })
     }

     handleSubmit = e =>{
         e.preventDefault()
         this.props.onAddOrEdit(this.state)
     }

    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit} autoComplete = "off">
                    <input name="bAccountNo" placeholder="A/C No." value={this.state.bAccountNo} onChange={this.handleInputChange} /><br/>
                    <input name="iFSC" placeholder="iFSC" value={this.state.iFSC} onChange={this.handleInputChange} /><br/>
                    <input name="bName" placeholder="bName" value={this.state.bName} onChange={this.handleInputChange} /><br/>
                    <input name="amount" placeholder="A/C No." value={this.state.amount} onChange={this.handleInputChange} /><br/>
                    <button type="submit"> Submit</button>

                </form>
            </div>
        )
    }
}

export default TransactionForm
