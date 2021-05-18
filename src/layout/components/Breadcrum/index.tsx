import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Link, { LinkProps } from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';


export interface IBreadcrumMap {
  [key: string]: {
    title: string
    click: boolean
  }
}

interface BreadcrumMapProps {
  breadcrumMap: IBreadcrumMap
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: theme.spacing(1)
    },
    lists: {
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    }
  }),
);

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => <Link {...props} component={RouterLink as any} />;

const RouterBreadcrumbs: React.FC<BreadcrumMapProps> = (props) => {
  const classes = useStyles()
  const { breadcrumMap } = props
  console.log(breadcrumMap)
  return (
    <div className={classes.root}>
      <Route>
        {({ location }) => {
          const pathnames = location.pathname.split('/').filter((x) => x);
          console.log(pathnames)
          return (
            <Breadcrumbs aria-label="breadcrumb">
              <LinkRouter color="inherit" to="/dashboard">
                Home
              </LinkRouter>
              {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                return !breadcrumMap[to]?.click || last ? (
                  <Typography color="inherit" key={to}>
                    {breadcrumMap[to]?.title || ''}
                  </Typography>
                ) : (
                  <LinkRouter color="textPrimary" to={to} key={to}>
                    {breadcrumMap[to]?.title || ''}
                  </LinkRouter>
                );
              })}
            </Breadcrumbs>
          );
        }}
      </Route>
    </div>
  );
}

export default RouterBreadcrumbs
