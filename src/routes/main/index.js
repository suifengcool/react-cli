import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router';
import {Link} from 'dva/router';
import { Button, Input, Spin, Layout, Menu, Dropdown, Breadcrumb, Icon, Avatar, Row, Col, Badge} from 'antd'

import _styles from './index.css';
import styles from '../../components/component.css';
import {components} from '../../router.mapping';

const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;

const clientHeight = document.body.clientHeight;
const minHeight = clientHeight - (56 + 45 + 10 + 15);

const Main = ({main, dispatch}) => {
    
    const {currentRoute, nav, collapsed} = main;

    const menus = [{
        children:[],
        id:1,
        key:"0_1",
        link:"overview",
        sign:"icon-home",
        txt:"首页"
    },{
        children:[],
        id:2,
        key:"1_1",
        link:"tech_stack",
        sign:"icon-jishu",
        txt:"技术栈"
    },{
        children:[{
            key: "2_2", 
            id: 3, 
            txt: "PC端", 
            link: "project/pc"
        },{
            key: "2_3", 
            id: 4, 
            txt: "移动端", 
            link: "project/mobile"
        },{
            key: "2_4", 
            id: 5, 
            txt: "微信公众号", 
            link: "project/wechart_public"
        },{
            key: "2_5", 
            id: 6, 
            txt: "微信小程序", 
            link: "project/wechart_miniapp"
        }],
        id:7,
        key:"2_1",
        link:"project/pc",
        sign:"icon-xiangmu",
        txt:"项目展示"
    },{
        children:[],
        id:8,
        key:"4_1",
        link:"member",
        sign:"icon-huiyuan",
        txt:"成为会员"
    },{
        children:[],
        id:9,
        key:"5_1",
        link:"msg_board",
        sign:"icon-liuyan1",
        txt:"留言板"
    },{
        children:[],
        id:10,
        key:"6_1",
        link:"about_me",
        sign:"icon-guanyuwomen",
        txt:"About me"
    },{
        children:[],
        id:11,
        key:"7_1",
        link:"",
        sign:"icon-fanhui",
        txt:"返回封面"
    }]

    const onCollapse = () => {
        dispatch({
            type: 'main/setParams',
            payload: {
                collapsed: !collapsed
            }
        })
    }

    return (
    	<Layout>
            <div style={{height:clientHeight}}>
                <Header className={_styles.header}>
                    {
                        collapsed
                        ?<div className={_styles.logo}>
                            <img src={require(`../../../public/image/me.jpg`)}/>
                        </div>
                        : ''
                    }
                    <div className={_styles.desc}>
                        致力于开发高可维护、可持续、可扩展的高性能web应用
                    </div>
                    <div className={_styles['header-right']}>
                        <Row>
                            <Col span={4}>
                            </Col>
                            <Col span={7} style={{padding: '2px 0'}}>
                            </Col>
                            <Col span={5} style={{textAlign: 'center'}}>
                                <i className={'iconfont icon-icon-'} style={{fontSize:'35px'}}></i>
                            </Col>
                            <Col span={8}>
                                <Dropdown trigger={['click']} overlay={
                                (
                                    <Menu>
                                        <div className={_styles['dropdown-menu']}>
                                            <Row>
                                                <Col span={10} className={_styles['dropdown-menu-item']}>
                                                    <Link to='/member'>
                                                        <div className={styles['font-color-7f8c97']}><i className={'iconfont icon-huiyuan'} style={{marginRight:'5px'}}></i>会员中心</div>
                                                    </Link>
                                                </Col>
                                                <Col span={10} className={_styles['dropdown-menu-item']}>
                                                    <Link to='#'>
                                                        <div className={styles['font-color-7f8c97']}><i className={'iconfont icon-mima'} style={{marginRight:'5px'}}></i>密码修改</div>
                                                    </Link>
                                                </Col>
                                            </Row>
                                        </div>
                                        <div className={_styles.logout}>
                                            <a onClick={() => {
                                                dispatch({type: 'main/logout'});
                                            }}>退出</a>
                                        </div>
                                    </Menu>
                                )}>
                                <span>
                                    <Icon style={{color: '#999'}} type="caret-down"/>
                                </span>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                </Header>
                <Layout className={_styles['layout-margin-top']}>
                    <Sider
                        className={_styles['sider-bg']}
                        style={{minHeight}}
                        width={200}
                        collapsible
                        collapsed={collapsed}
                        onCollapse={onCollapse}
                    >
                        <div className={_styles['control-label']}>
                            {
                                !collapsed 
                                ? <h4>Suifeng</h4>
                                : <p>随风</p>
                            }
                            {
                                !collapsed 
                                ? <p>make things make sense</p>
                                : ''
                            }
                        </div>
                        <Menu
                            className={_styles['sider-bg']}
                            theme="dark"
                            mode="inline"
                        >
                            {
                                menus.length && menus.map((m, i) => {
                                    const {txt, link, children, key, sign} = m;
                                    return (
                                        children.length > 0 
                                        ? (
                                            <SubMenu 
                                                key = {`sub${key}`}
                                                title = {
                                                    <Link to={`/${link}`} style={{color:'#eee'}}>
                                                        <Row>
                                                            <i className={`iconfont ${sign}`} style={{marginRight: 10,verticalAlign: '-3%'}}></i>
                                                            {
                                                                !collapsed ? <span>{txt}</span> : ''
                                                            }
                                                            
                                                        </Row>
                                                    </Link>
                                                }
                                            >
                                                {
                                                    children.map((c, j) => {
                                                        return (
                                                            <Menu.Item key={c.key}>
                                                                <Link to={`/${c.link}`} style={{color:'#eee'}}>
                                                                    {c.txt}
                                                                </Link>
                                                            </Menu.Item>
                                                        )
                                                    })
                                                }
                                            </SubMenu>
                                        ) 
                                        : (
                                            <Menu.Item className={_styles['sider-bg']} key={key}>
                                                <Link to={`/${link}`} style={{color:'#eee'}}>
                                                    <Row>
                                                        <i className={`iconfont ${sign}`} style={{marginRight: 10,verticalAlign: '1%'}}></i>
                                                        {
                                                            !collapsed ? <span>{txt}</span> : ''
                                                        }
                                                    </Row>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    )
                                })}
                        </Menu>
                        {
                            !collapsed
                            ? <div className={_styles['slider-box']} style={{marginTop: 10}}>
                                <div className={_styles['slider-img-box']}>
                                    <img src={require(`../../../public/image/me.jpg`)}/>
                                </div>
                                <h3>Suifeng</h3>
                                <p className={styles['border-bottom']} style={{paddingBottom: '20px', boxSizing: 'border-box'}}>一万年太久，只争朝夕</p>
                                <Row type="flex" justify="space-between" style={{paddingLeft: '30px',paddingRight: '30px', marginTop: '20px'}}>
                                    <Col span={10}><i className={'iconfont icon-github'} style={{marginRight:'5px'}}></i><a href='https://github.com/suifengcool'>Github</a></Col>
                                    <Col span={10}><i className={'iconfont icon-blog'} style={{marginRight:'5px'}}></i><a href='https://suifengcool.github.io/'>Blog</a></Col>
                                </Row>
                            </div>
                            : ''
                        }
                    </Sider>
                    <Layout className={_styles['layout-content-margin-top']} className={_styles['fixIE10Flex']}>
                        <div className={_styles.breadcrumb}>
                            {
                                nav && nav.map((d, i) => {
                                    return (
                                        <div key={i}>{d}</div>
                                    )
                                })
                            }
                        </div>
                        <Content className={`${_styles['content-margin-top']} ${styles['popup-container']}`}
                            style={{minHeight}} id='popup-container'>
                            {
                                components[currentRoute] || ''
                            }
                        </Content>
                        <div style={{ textAlign: 'center' ,position: 'fixed',left:0,bottom:'0',color: '#000',width: '100%',height: 48,background :'#7B8182',lineHeight: '48px'}}>
                            © 2017 - 随风 前端开发  - 鄂ICP备17029919号 坚持·规范·专注
                        </div>
                    </Layout>

                </Layout>
            </div>
        </Layout>
    )
}

const mapStateToProps = (props) => {
    return {
  		main: props.main
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
		dispatch
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
