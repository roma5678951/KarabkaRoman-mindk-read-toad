import React from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import PropTypes from 'prop-types';

import ListItemLink from "../../components/ListItemLink/ListItemLink";

function Menu({rawData}) {

    const [open, setOpen] = React.useState(false);

    const handleCategoriesClick = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const categories = rawData ? rawData.map(({id, title, alias}) =>
            <ListItemLink key={id} primary={title} path={alias} to={`/categories/${alias}`} />) : [];

    return (
        <nav>
            <List>
                <div>
                   <Typography>
                       Super Shop
                   </Typography>
                </div>
                <Divider/>
                <ListItem button onClick={handleCategoriesClick}>
                    <ListItemText primary="Categories"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>
                <Collapse component="li" in={open} timeout="auto" unmountOnExit>
                    <List disablePadding key={new Date().getTime()}>{categories}</List>
                </Collapse>
            </List>
        </nav>
    );
}

Menu.propTypes = {
    rawData: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.number,
        title: PropTypes.string,
        alias: PropTypes.string,
    })),
};

export default Menu;
