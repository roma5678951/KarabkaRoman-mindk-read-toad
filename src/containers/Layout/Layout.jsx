import React from "react";
import Grid from "@material-ui/core/Grid";

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Menu from "../Menu/Menu";
import CategoryPage from "../../components/CategoryPage/CategoryPage";

import useStyles from "./styles";

import useDataApi from '../../utils/hooks/useDataApi';

function Layout() {
    const classes = useStyles();
    const {rawData} = useDataApi({url: '/categories'});

    return (
        <BrowserRouter>
            <Grid container className={classes.app}>
                <Grid container direction="row">
                    <Grid className={classes.menu}>
                        <Menu rawData={rawData}/>
                    </Grid>
                    <Grid className={classes.mainSection}>
                        <Switch>
                            <Route exact path={'/'} >
                                Main Page
                            </Route>
                            <Route path={'/categories/:id'} component={CategoryPage} />
                            <Route >
                                404
                            </Route>
                        </Switch>
                    </Grid>
                </Grid>
            </Grid>
        </BrowserRouter>
    );
}

export default Layout;
