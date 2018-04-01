import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Posts from '../containers/posts';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
        <hr/>
        <h2>Posts:</h2>
        <Posts />
    </div>
);

export default App;