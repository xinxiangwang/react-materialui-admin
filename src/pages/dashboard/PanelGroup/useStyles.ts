import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const color = {
  visit: '#40c9c6',
  message: '#36a3f7',
  purchase: '#f4516c',
  shop: '#34bfa3'
}

export const usePanelStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    padding: theme.spacing(1),
    cursor: "pointer",
    "&:hover .visit": {
      backgroundColor: color.visit
    },
    "&:hover .message": {
      backgroundColor: color.message
    },
    "&:hover .purchase": {
      backgroundColor: color.purchase
    },
    "&:hover .shop": {
      backgroundColor: color.shop
    },
    "&:hover .icon svg": {
      color: 'white'
    },
    "& .icon": {
      width: '80px',
      height: '80px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      transition: 'backgroundColor .4s ease-out',
      "& svg": {
        width: '60px',
        height: '60px',
        transition: 'color .4s ease-out',
      }
    },
    "& .visit svg": {
      color: color.visit
    },
    "& .message svg": {
      color: color.message
    },
    "& .purchase svg": {
      color: color.purchase
    },
    "& .shop svg": {
      color: color.shop
    },
    "& .num": {
      height: '60px',
      padding: '0 ' + theme.spacing(1) + 'px',
      "& p": {
        margin: 0,
        fontWeight: 700,
        "&.title": {
          marginBottom: '12px',
          color: 'rgba(0,0,0,.45)'
        },
        "&.content": {
          marginBottom: '12px',
          fontSize: '20px',
          color: '#666'
        }
      }
    }
  }
}))