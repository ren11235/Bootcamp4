import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      showNew: false,
      showDelete: false,
    };
  }

  filterUpdate(value) {
    //Here you will need to set the filterText property of state to the value passed into this function
      this.setState({
        filterText: value
      })
  }

  selectedUpdate(id) {
    //Here you will need to update the selectedBuilding property of state to the id passed into this function
    this.setState({
      selectedBuilding: id
    })
  } 
  
  newViewUpdate(val){
    this.setState({
      showNew: val
    })
  }

  deleteViewUpdate(val){
    this.setState({
      showDelete: val
    })
  }

  render() {
    
    return (

      <div>
        <div className = "header"><h1>UF Directory App</h1></div>
        <Search
          filterText={this.state.filterText}
          filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      
                      <h2><b>Buildings</b></h2>
                      <h4>Click on a name to view more information</h4>
                      
                    </td>
                  </tr>
                  <BuildingList
                    data={this.props.data}
                    filterText={this.state.filterText}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              
              <ViewBuilding
                selectedBuilding = {this.state.selectedBuilding}
                data={this.props.data}
              />
              <AddBuilding 
                showNew = {this.state.showNew}
                newViewUpdate = {this.newViewUpdate.bind(this)}
                data={this.props.data}
              />
              <RemoveBuilding
                showDelete = {this.state.showDelete}
                deleteViewUpdate = {this.deleteViewUpdate.bind(this)}
                data={this.props.data}
              />
            </div>
          </div>
          
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
