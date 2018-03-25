import React from 'react';
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import KittiesList from '../containers/kitties-list';
import KittyDetails from '../containers/kitty_details';
require('../../scss/style.scss');

const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Details:</h2>
        <UserDetail />
        <hr/>
        <h2>Kitties List:</h2>
        <KittiesList />
        <h3>Kitties Details:</h3>
        <KittyDetails />
    </div>
);

export default App;