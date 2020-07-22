import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}))

export default function VerticalTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="热门推荐" {...a11yProps(0)} />
        <Tab label="鲜花" {...a11yProps(1)} />
        <Tab label="永生花" {...a11yProps(2)} />
        <Tab label="蛋糕" {...a11yProps(3)} />
        <Tab label="特色礼品" {...a11yProps(4)} />
        <Tab label="礼篮" {...a11yProps(5)} />
        <Tab label="绿植花卉" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0} wrapper="span">
      <div id="hot" name="hot" className="catebox-details-mode active">
                            <header className="catebox-details-banner">
                                <a className="navigation" href="https://m.hua.com/xingjiabixianhua/">
                                    <img src="https://img02.hua.com/m/category/Classification/hot.png" alt=""/>
                                </a>
                            </header>
                                                        <div className="catebox-details-body">

                                    <nav className="catebox-details-list ">
                                                <div className="catebox-details-item">
                                                    <a href="/aiqingxianhua/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png" alt="送恋人鲜花"/>
                                                        <p className="catebox-details-item-desc">送恋人鲜花</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/songzhangbeixianhua/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png" alt="送长辈鲜花"/>
                                                        <p className="catebox-details-item-desc">送长辈鲜花</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/shengrixianhua/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png" alt="生日鲜花"/>
                                                        <p className="catebox-details-item-desc">生日鲜花</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/hezhuanghua/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png" alt="礼盒鲜花"/>
                                                        <p className="catebox-details-item-desc">礼盒鲜花</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/yongshenghua/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_PPF.png" alt="永生花"/>
                                                        <p className="catebox-details-item-desc">永生花</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/cake/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake.png" alt="蛋糕"/>
                                                        <p className="catebox-details-item-desc">蛋糕</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/gansodangao/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake_ganso.png" alt="元祖蛋糕"/>
                                                        <p className="catebox-details-item-desc">元祖蛋糕</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/gifts/goldenflower/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png" alt="金箔花"/>
                                                        <p className="catebox-details-item-desc">金箔花</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/gifts/shoushi/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png" alt="首饰"/>
                                                        <p className="catebox-details-item-desc">首饰</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/qiaokeli/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png" alt="巧罗巧克力"/>
                                                        <p className="catebox-details-item-desc">巧罗巧克力</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/gifts/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png" alt="创意礼品"/>
                                                        <p className="catebox-details-item-desc">创意礼品</p>
                                                    </a>
                                                </div>
                                                <div className="catebox-details-item">
                                                    <a href="/qiyetuangou/" className="navigation">
                                                        <img className="catebox-details-item-pic" src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png" alt="企业团购"/>
                                                        <p className="catebox-details-item-desc">企业团购</p>
                                                    </a>
                                                </div>
                                    </nav>
                                </div>
                    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  )
}
