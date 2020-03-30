import React, {memo} from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function ListItemLink({primary, ...other}) {

    return (
        <li>
            <ListItem button component={Link} {...other}>
                <ListItemText primary={primary} />
            </ListItem>
        </li>
    );
}

ListItem.PropTypes = {
  primary: PropTypes.string.isRequired,
};

export default memo(ListItemLink);
