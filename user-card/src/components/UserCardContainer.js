import React from 'react';
import UserCard from './UserCard'

class UseCardContainer extends React.Component {
    /* https://api.github.com/users/ */
    constructor() {
        super();
        this.state = {
            data: [],
            followers:[]
        };
    }
    componentDidMount(){
        this.fetchUsers();
    }
    fetchUsers = () => {
        fetch('https://api.github.com/users/ch04937' )
            .then(response => response.json())
            .then(customers => customers.results)
            .catch(err => console.log(err))
    }

    render(){

        return(
            <>
            <h1>GitHub User Card</h1>
            <UserCard data={this.state.data} />
            </>
        )
    }


}

export default UseCardContainer;