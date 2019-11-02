import React from 'react';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
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
    
    deleteB(){
        console.log(this.state.name)
        for( var i = 0; i < this.props.data.length; i++){ 
            if ( this.props.data[i].name === this.state.name) {
              this.props.data.splice(i, 1); 
            }
         }
        this.props.deleteViewUpdate()
    }
    render() {
        //You will need to save the value from the textbox and update it as it changes
        //You will need the onChange value for the input tag to capture the textbox value
        if(this.props.showDelete){
            return (
                <div className = "popup">
                <h2>Delete Building</h2>
                <form>
                    <input 
                        type="text" 
                        placeholder="Type name of building to delete" 
                        ref = {(value)=>{this.myValue1 = value}}
                        onChange={this.nameUpdate.bind(this)}
                    />
                </form>
                <p className = "button1"
                    onClick={()=>this.deleteB()}
                    
                >
                    Delete this Building
                </p>
                <p className = "button1"
                    onClick={()=>this.props.deleteViewUpdate(false)}
                >
                    Cancel
                </p>
                </div>
            );
        }
        else{
            return(
            <p className = "button"
                onClick={()=>this.props.deleteViewUpdate(true)}
            >
                Delete Building
            </p>);
        }
    }
}
export default AddBuilding;