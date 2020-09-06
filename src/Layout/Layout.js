import React, {Component} from 'react';
import TodoApp from '../components/TodoApp/TodoApp';
import { Container} from 'reactstrap';

class Layout extends Component{
    render(){
        return(
            <Container>
                <TodoApp/>   
            </Container>   
        )
    }
}

export default Layout;