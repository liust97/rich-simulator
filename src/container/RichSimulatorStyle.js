import amber from '@material-ui/core/colors/amber';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const RichSimulatorStyle = theme => ({
  appbar: {
    position: 'sticky',
    top: 0,
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    height: 50,
    zIndex: 5,
    maxWidth: 896,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
    boxShadow: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  balance: {
    flexGrow: 1,
    textAlign: 'center'
  },
  topLogo: {
  },
  topPaper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  yuebaoPaper: {
    fontSize: '80%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  yuebaoLabel: {
    color: theme.palette.primary.main
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  largewords: {
    margin: theme.spacing(2),
    fontWeight: 'bold',
    color: theme.palette.primary.main,
  },
  wordsWrapper: {
    textAlign: 'center',
    width: "24rem"
  },
  descWrapper: {
    width: "10rem"
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    margin: 0,
    paddingBottom: 0,
    paddingTop: theme.spacing(1),
  },
  cardActions: {
    paddingTop: 0,
  },
  cardInput: {
    marginTop: theme.spacing(1),
    flexGrow: 1,
  },
  price: {
    color: theme.palette.primary.dark
  },
  addButton: {
    width: 90,
    minWidth: 90
  },
  shopList: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  listPanel: {
    paddingTop: theme.spacing(2),
    minHeight: 500
  },
  emptyLabel: {
    color: 'grey',
    textAlign: 'center',
  },
  footer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#ffa040',
  },
  footerText: {
    fontSize: '80%',
    letterSpacing: '0.2em',
    margin: '0.2em',
  },
  smallText: {
    fontSize: '60%',
    letterSpacing: '0.2em',
    margin: '0.2em',
    color: '#6b6b6b'
  },
  footerGrid: {
    marginBottom: -8
  },
  qrcodeImg: {
    width: '3rem',
    margin: theme.spacing(1),
  },
  popText: {
    letterSpacing: '0.1em',
    fontSize: '70%',
    textAlign: 'center',
  },
  collectImg: {
    height: '20rem'
  },
  collectFrame: {
    height: '20rem'
  }
});
const MySwitch = withStyles({
  switchBase: {
    color: amber[300],
    '&$checked': {
      color: amber[500],
    },
    '&$checked + $track': {
      backgroundColor: amber[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

export { RichSimulatorStyle, MySwitch }