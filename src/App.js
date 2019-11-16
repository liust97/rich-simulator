import React, { useState, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TextField from '@material-ui/core/TextField';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import deepOrange from '@material-ui/core/colors/deepOrange';
import amber from '@material-ui/core/colors/amber';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useInterval from './useInterval'
import { withStyles } from '@material-ui/core/styles';
const theme = createMuiTheme({
  shadows: [
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
  ],
  palette: {
    primary: deepOrange,
    secondary: amber,
  }
});

const MySwitch = withStyles({
  switchBase: {
    color: deepOrange[300],
    '&$checked': {
      color: deepOrange[500],
    },
    '&$checked + $track': {
      backgroundColor: deepOrange[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(4),
  },
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    backgroundColor: '#eeeeee'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  balance: {
    flexGrow: 1,
    textAlign: 'center'
  },
  topLogo: {
    width: 78
  },
  topPaper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
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
    color: '#ffa040'
  },
  bigAvatar: {
    width: 150,
    height: 150
  },
  largewords: {
    margin: theme.spacing(2),
    fontWeight: 'bold',
    color: '#ffa040',
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
    color: '#FF5000'
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
    minHeight: 600
  },
  emptyLabel: {
    color: 'grey',
    textAlign: 'center',
  },
  footer: {
    padding: theme.spacing(4),
    backgroundColor: '#fff',
    textAlign: 'center',
    color: '#ffa040',
  },
  footerText: {
    fontSize: '80%',
    letterSpacing: '0.2em',
    'a:visited': {
      color: 'pink'
    }
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function App() {

  const [state, setState] = useState({
    profitPerSec: 0,
    isMakingProfit: false,
    money: 279000000000
  });
  const classes = useStyles();
  const items = require('./static/goods.json')['items'];
  items.sort((a, b) => a.price - b.price)
  const itemsNumTmp = {};
  items.forEach(item => {
    itemsNumTmp[item.name] = 0;
  });
  const [itemsNum, setItemsNum] = useState(itemsNumTmp);
  const [balance, setBalance] = useState(state.money);
  let isDisplayTmp = {}
  items.forEach(item => {
    isDisplayTmp[item.name] = false;
  });
  const [isDisplay, setIsDisplay] = useState(isDisplayTmp);
  const nametoprice = {}
  items.forEach(item => {
    nametoprice[item.name] = item.price;
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  function getSum() {
    let summary = 0;
    Object.values(itemsNum).forEach(i => summary += parseInt(i));
    return summary;
  }
  function onNumberChange(target) {
    const itemname = target.id;
    if (!target.value) {
      target.value = 0;
    } else if (target.value[0] == 0) {
      target.value = target.value.substr(1)
    }
    const itemnumber = target.value;
    if (itemnumber == 0) {
      setIsDisplay({
        ...isDisplay,
        [itemname]: false
      })
    } else {
      setIsDisplay({
        ...isDisplay,
        [itemname]: true
      });
    }
    let currBalance = state.money;
    items.forEach(item => {
      if (item.name !== itemname) {
        currBalance -= itemsNum[item.name] * item.price;
      } else {
        currBalance -= itemnumber * item.price;
      }
    });
    if (currBalance < 0) {
      let exceptcurr = 0;
      items.forEach(item => {
        if (item.name !== itemname) {
          exceptcurr += itemsNum[item.name] * item.price;
        }
      });
      const number = Math.floor((state.money - exceptcurr) / nametoprice[itemname]);
      setItemsNum({
        ...itemsNum,
        [itemname]: number
      });
      if (number == 0) {
        setIsDisplay({
          ...isDisplay,
          [itemname]: false
        })
      }
      target.value = number;
      setBalance(state.money - exceptcurr - nametoprice[itemname] * number)
    } else {
      setItemsNum({
        ...itemsNum,
        [itemname]: target.value
      })
      setBalance(currBalance)
    }
  }
  const [delay, setDelay] = useState(1000);
  const [isRunning, setIsRunning] = useState(false);
  useInterval(() => {
    // Your custom logic here
    makeProfit()
  }, isRunning ? delay : null);
  function handleYuebao(event) {
    setState({ ...state, ['isMakingProfit']: event.target.checked });
    if (event.target.checked) {
      setIsRunning(true)
    } else {
      setIsRunning(false)
    }
  }
  function makeProfit() {
    const pps = Math.floor(balance * 0.00000000072)
    const newmoney = Math.floor(state.money + pps)
    let currBalance = newmoney;
    items.forEach(item => {
      currBalance -= itemsNum[item.name] * item.price;
    });
    setBalance(currBalance)
    setState({ ...state, ['isMakingProfit']: true, ['profitPerSec']: pps, ['money']: newmoney });
  }
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root} >
      <ThemeProvider theme={theme}>
        <header>
          <AppBar position="fixed" >
            <Toolbar>
              <img alt="lemon" variant="square" src={require("./static/images/柠檬精.png")} className={classes.topLogo} />
              <Typography variant="h6" className={classes.balance}>
                余额：{numberWithCommas(balance)} 元
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <main>
          <Container className={classes.container} maxWidth="md">
            <Paper className={classes.topPaper}>
              <Grid container justify="center" alignItems="center">
                <Avatar alt="jack ma" src={require("./static/images/jack-ma.jpg")} className={classes.bigAvatar} />
                <Typography variant="h3" className={classes.largewords}>马云模拟器</Typography>
              </Grid>
            </Paper>

            <Paper className={classes.yuebaoPaper}>
              <FormControlLabel
                className={classes.yuebaoLabel}
                control={
                  <MySwitch
                    checked={state.isMakingProfit}
                    onChange={handleYuebao}
                    value="checkedB"
                  />
                }
                label="把钱存入余额宝"
              />

              {(state.isMakingProfit ? <span>每秒收益：{state.profitPerSec}元</span> : null)}

            </Paper>

            <AppBar position="static">
              <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="商城" {...a11yProps(0)} />
                <Tab label="我的购物车" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <Grid className={classes.cardGrid} container spacing={3}>
                {
                  items.map(item => (
                    <Grid item key={item.name} xs={12} sm={6} md={4}>
                      <Card className={classes.card}>
                        <CardMedia
                          className={classes.cardMedia}
                          image={require(`./static/images/items/${item.name}.jpg`)}
                          title={item.name}
                        />
                        <CardContent className={classes.cardContent}>
                          <Typography variant="h6" component="h2">
                            {item.name}
                          </Typography>
                          <Typography className={classes.price}>
                            ￥<b>{item.price}</b>
                          </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                          <TextField
                            InputLabelProps={{
                              shrink: true,
                            }}
                            id={item.name}
                            data-itemname={item.name}
                            label="数量"
                            type="number"
                            defaultValue='0'
                            className={classes.cardInput}
                            margin="normal"
                            inputProps={{ min: "0", step: "1" }}
                            onChange={(e) => onNumberChange(e.target)}
                          />
                          <Button id={item.name} className={classes.addButton} size="small" variant="contained" color="primary"
                            onClick={e => {
                              const target = document.getElementById(item.name);
                              target.value = parseInt(document.getElementById(item.name).value) + 1;
                              onNumberChange(target)
                            }}>
                            加入购物车
                                    </Button>
                        </CardActions>
                      </Card>
                    </Grid>
                  ))
                }
              </Grid>

            </TabPanel>
            <TabPanel className={classes.listPanel} value={value} index={1}>
              <Grid container justify="center">
                <List className={classes.shopList}>

                  <ListSubheader component="div" id="nested-list-subheader">
                    我的购物清单 - 马云模拟器(lemonjing.com)
                  </ListSubheader>
                  {
                    getSum() === 0 ? <Typography className={classes.emptyLabel}>你的购物车空空如也</Typography> : null
                  }
                  {
                    items.map(item => (!isDisplay[item.name] ? null :
                      <ListItem key={item.name}>
                        <ListItemAvatar>
                          <Avatar src={require(`./static/images/items/${item.name}.jpg`)}>
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={item.name} secondary={'数量: ' + itemsNum[item.name]} />
                      </ListItem>
                    ))
                  }
                </List>
              </Grid>
            </TabPanel>
          </Container>
        </main>
        <footer className={classes.footer}>
          <Container maxWidth='md'>
            <Typography className={classes.footerText}>🍋🍋🍋🍋Lemonjing 柠檬精网🍋🍋🍋🍋</Typography>
            <Typography className={classes.footerText}>本网站仅供娱乐，信息仅供参考</Typography>
            <Typography className={classes.footerText}>Inspired by <a href="https://neal.fun/spend/">Spend Bill Gates' Money</a></Typography>
            <Typography className={classes.footerText}>由<a href="https://liust.me">@LiuST</a>自豪地制作</Typography>
          </Container>
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
