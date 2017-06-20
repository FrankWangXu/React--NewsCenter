import React from 'react';
import {Row, Col} from 'antd';
import {Tabs, Carousel, Icon} from 'antd';
const TabPane = Tabs.TabPane;
import PCNewsCBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
export default class PCNewsContainer extends React.Component{
    render(){
        const settings={
            dots:true,
            infinite:true,
            speed:500,
            slidesToShow:1,
            autoplay:true
        };
        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="../src/images/carousel_1.jpg"/></div>
                                    <div><img src="../src/images/carousel_2.jpg"/></div>
                                    <div><img src="../src/images/carousel_3.jpg"/></div>
                                    <div><img src="../src/images/carousel_4.jpg"/></div>                                    
                                </Carousel>
                            </div>
                            <PCNewsImageBlock count={9} type="shehui" width="400px" cartTitle="社会头条" imageWidth="112px" />
                        </div>
                        <Tabs class="tabs_news">
                            <TabPane tab={<span><Icon type="bars" />热点</span>} key="1">
                                <PCNewsCBlock count={27} type="top" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={<span><Icon type="usergroup-add" />社会</span>} key="2">
                                <PCNewsCBlock count={27} type="shehui" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={<span><Icon type="flag" />国内</span>} key="3">
                                <PCNewsCBlock count={27} type="guonei" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={<span><Icon type="global" />国际</span>} key="4">
                                <PCNewsCBlock count={27} type="guoji" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs class="tabs_news">
                            <TabPane tab={<span><Icon type="wallet" />娱乐</span>} key="5">
                                <PCNewsCBlock count={27} type="yule" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={<span><Icon type="compass" />体育</span>} key="6">
                                <PCNewsCBlock count={27} type="tiyu" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={<span><Icon type="rocket" />科技</span>} key="7">
                                <PCNewsCBlock count={27} type="keji" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab={<span><Icon type="camera" />时尚</span>} key="8">
                                <PCNewsCBlock count={27} type="shishang" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>
                        <Tabs class="tabs_product">
							<TabPane tab="其他" key="1">
								<PCProduct/>
							</TabPane>
						</Tabs>
                        <div>
                            <PCNewsImageBlock count={20} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="132px" /> 
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        );
    };
}