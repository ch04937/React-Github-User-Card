import React from 'react';
import { Segment, Card, Image } from 'semantic-ui-react';

class CardContent extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        };
    }
    componentDidMount(){
        this.fetchUsersFollowers();
    }
    fetchUsersFollowers = () => {
        fetch('https://api.github.com/users/ch04937/followers' )
            .then(response => response.json())
            .then(customers => customers.results)
            .catch(err => console.log(err))
    }
    render() {
        console.log(this.state.login)

        return (

            this.state.data.map(e => {

                return (
                    < Segment raised >

                        <Card>
                            <Image src={e.avatar_url} />
                            <Card.Content>
                                <Card.Header>
                                    {e.login}
                                </Card.Header>
                                <Card.Meta>{e.html_url}</Card.Meta>
                                <Card.Description>Site Type: {e.type}</Card.Description>
                            </Card.Content>
                        </Card>
                    </Segment >)
            })

        )
    }
}

export default CardContent 