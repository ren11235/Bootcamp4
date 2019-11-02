import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            code: "",
            address: "",
            coordinates: {
              latitude: 0,
              longitude: 0
            },
            num: this.props.data.length + 1
        };
    }
    nameUpdate() {
        //Here you will need to update the value of the filter with the value from the textbox
        const val = this.myValue1.value;
        console.log(val)
        this.setState({
            name: val
        })
    }
    codeUpdate() {
        //Here you will need to update the value of the filter with the value from the textbox
        const val = this.myValue2.value;
        console.log(val)
        this.setState({
            code: val
        })
    }
    addressUpdate() {
        //Here you will need to update the value of the filter with the value from the textbox
        const val = this.myValue3.value;
        console.log(val)
        this.setState({
            address: val
        })
    }
    addNew(){
        console.log(this.state.name)
        const building = {
            name: this.state.name,
            code: this.state.code,
            address: this.state.address,
            coordinate: this.state.coordinate,
            id: this.state.num
        }
        console.log(this.props.data)
        this.props.data.push(building)
        this.props.newViewUpdate()
        this.state.num = this.state.num + 1
    }
    render() {
        //You will need to save the value from the textbox and update it as it changes
        //You will need the onChange value for the input tag to capture the textbox value
        if(this.props.showNew){
            return (
                <div className = "popup">
                <form>
                    <h2>Add Building</h2>
                    <input 
                        type="text" 
                        placeholder="Type name of new building" 
                        ref = {(value)=>{this.myValue1 = value}}
                        onChange={this.nameUpdate.bind(this)}
                    />
                    <input 
                            type="text" 
                            placeholder="Type code of new building" 
                            ref = {(value)=>{this.myValue2 = value}}
                            onChange={this.codeUpdate.bind(this)}
                    />
                    <input 
                            type="text" 
                            placeholder="Type address of new building" 
                            ref = {(value)=>{this.myValue3 = value}}
                            onChange={this.addressUpdate.bind(this)}
                    />
                </form>
                <p className = "button1"
                    onClick={()=>this.addNew()}
                    
                >
                    Add this Building
                </p>
                <p className = "button1"
                    onClick={()=>this.props.newViewUpdate(false)}
                >
                    Cancel
                </p>
                </div>
            );
        }
        else{
            return(
            <p className = "button"
                onClick={()=>this.props.newViewUpdate(true)}
            >
                Add Building
            </p>);
        }
    }
}
export default AddBuilding;