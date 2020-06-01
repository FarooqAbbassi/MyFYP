import React,{Component , useCallback} from 'react';
import{
    View,
    document,
    Image,
    Text,
    TouchableOpacity,
    Linking,
    Button,
} from 'react-native'; 
import ChatBot from 'react-native-chatbot';

const Bsf_Link = "https://www.entrepreneur.com/article/333744";
const Bsc_Link = "https://www.crowdspring.com/blog/clothing_brand_business_tips/";
const Bsit_Link = "https://searchcio.techtarget.com/definition/IT-strategy-information-technology-strategy";
const Bselec_Link = "https://www.bplans.com/electronics_retailer_business_plan/strategy_and_implementation_summary_fc.php";

const mf_Link = "https://www.designhill.com/design-blog/11-highly-effective-marketing-strategies-food-beverage-business/";
const mc_Link = "https://www.appnova.com/marketing-strategies-for-fashion-brand/";
const mit_Link = "https://totalproductmarketing.com/marketing-strategies-for-tech-companies-budget/";
const melec_Link = "https://www.doofinder.com/en/blog/marketing-for-consumer-electronics-shops";

const sf_Link = "https://www.statista.com/outlook/40000000/100/food/worldwide#market-revenue";
const sc_Link = "https://www.statista.com/topics/5091/apparel-market-worldwide/";
const sit_Link = "https://www.shopify.com/enterprise/global-ecommerce-statistics";
const selec_Link = "https://www.statista.com/statistics/539974/major-domestic-appliances-unit-sales-worldwide/";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

    Step = [
        {
            id:1,
            message:'Peace Be Upon You sir, i hope you are fine',
            trigger:2,
        },
        {
            id:2,
            user:true,
            trigger:3,
        },
        {
            id:3,
            message:'Hmm!! May God Bless You always',
            trigger:4,
        },
        {
            id:4,
            message:'May I know your Name',
            trigger:5,
        },
        {
            id:5,
            user:true,
            trigger:7,
        },
        {
            id:7,
            message:'Your Welcome {previousValue},Nice to meet you',
            trigger:8,
        },
        {
            id:8,
            message:'How may i help you {previousValue}',
            trigger:9,
        },
        {
            id:9,
            user:true,
            trigger:10,
        },
        {
            id:10,
            message:'Remember! I may perform following jobs',
            trigger:11,
        },
        {
            id:11,
            options:[
                {value:'Business Strategy' , label:'Business Strategy', trigger:12},
                {value:'Marketing' , label:'Marketing', trigger:13},
                {value:'Sales' , label:'Sales', trigger:14},
                {value:'Not Intersted?' , label:'Not Intersted?', trigger:'ends'},
            ],
        },
        {
            id:12,
            message:'You select Business Strategy',
            trigger:15,
        },
        {
            id:13,
            message:'You select Marketing',
            trigger:16,
        },
        {
            id:14,
            message:'You select Sales',
            trigger:17,
        },
        {
            id:15,
            message:'May you suggest me in which Domain',
            trigger:18,
        },
        {
            id:18,
            options:[
                {value:'food' , label:'food' , trigger:'f'},
                {value:'Clothes' , label:'Clothes' , trigger:'cl'},
                {value:'Information Technology' , label:'Information Technology' , trigger:'it'},
                {value:'Electronics' , label:'Electronics' , trigger:'ele'},
            ]
        },
        {
            id:'f',
            component:(
                <View>
                    <Text 
                        style={{
                                fontSize:24, 
                                fontStyle:'italic', 
                                fontFamily:'Times New Roman', 
                                fontWeight:'bold', 
                                color:'#dc143c'
                             }}> 
                            Business Strategy about Food 
                    </Text>
                    <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/bsf1.jpg')} 
                        style={{
                            width:'100%', 
                            height:250
                            }} 
                    />
                    <Text style={{
                        fontSize:18,
                        fontWeight:'bold',
                        color:'#9932cc'
                    }}>
                        Descriptions:
                    </Text>
                    <Text style={{fontSize:14}}>
                            Every year, we see hundreds of innovative new entrants into the food and beverage 
                            category that “wow” consumers, investors and big brands. These startups are 
                            attracting significant investment from traditional venture capital firms and, 
                            increasingly, big food companies looking to develop great young brands.

                            From 2013 to 2018, food and beverage startups raised $9.5 billion across 2,100 deals globally. 
                            And it’s safe to say that larger food and beverage companies have officially entered the venture 
                            capital game, with $1.08 billion invested across 99 deals in 2017 alone.
                    </Text>
                    <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={Bsf_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
                </View>
            ),
            trigger:'endd' 
        },
        {
            id:'cl',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Business Strategy about Clothes 
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/bsc1.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    The importance of your brand identity cannot be understated, 
                    especially in the world of fashion. Clothing is very personal 
                    because our clothing choices are one of the ways that we define 
                    our identity – to both ourselves and to the world. As a result, 
                    the brands we choose to wear and the labels we display on our clothes 
                    become an extension of who we are and how we see ourselves.

                    In particular, the millennial generation has been shown to desire an 
                    authentic connection with their clothing brands. Fabrizio Moreira 
                    writes in “Building a Startup Clothing Brand in a Fast Fashion Economy“
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={Bsc_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
            ),
            trigger:'endd' 
        },
        {
            id:'it',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Business Strategy about Information Technology 
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/bsit.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    IT strategy (information technology strategy) is a comprehensive plan 
                    that outlines how technology should be used to meet IT and business goals. 
                    An IT strategy, also called a technology strategy or IT/technology strategic 
                    plan, is a written document that details the multiple factors that affect 
                    the organization's investment in and use of technology.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={Bsit_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
            
            ),
            trigger:'endd' 
        },
        {
            id:'ele',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Business Strategy about Electronic Items
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/bse.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    Safe Current has developed a targeted strategy that allows them to 
                    leverage their competitive edge and quickly gain market penetration. 
                    Safe Current's competitive edge is its ability to use The Cleveland 
                    Illuminating Company's utility status for the sale of house surge 
                    arrestors and protectors.

                    The business strategy will concentrate on the ability to offer supreme, 
                    inexpensive protection for an entire family's stable of electric and 
                    electronic appliances. This campaign will be communicated through various 
                    methods and will focus on the product offerings coming from the safe, 
                    established TCIC, an icon of Cleveland for over 50 years. Please review 
                    the following sections for a more detailed analysis.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={Bselec_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
            
            ),
            trigger:'endd' 
        },
        {
            id:16,
            message:'May you suggest me in which Domain',
            trigger:19,
        },
        {
            id:19,
            options:[
                {value:'food' , label:'food' , trigger:'fm'},
                {value:'Clothes' , label:'Clothes' , trigger:'clm'},
                {value:'Information Technology' , label:'Information Technology' , trigger:'itm'},
                {value:'Electronics' , label:'Electronics' , trigger:'elem'},
            ]
        },
        {
            id:'fm',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Marketing Strategy about Food Item
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/sf1.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    So, if you are in the Food and Beverage business then you need to up your branding game 
                    to enjoy the larger share of the pie.
                    As exciting as it is, the food and beverage industry relies heavily only on our five senses. 
                    In fact, unlike other recreational activities, dining has always been a matter of a lasting 
                    impression of taste and flavors. From French cuisine to the American soul food, marketing of 
                    your food is done mostly by enticing the visual palate. Global franchises such as ‘Taco Bell’ 
                    or even ‘Chilli’s’ have one thing in common: they are delicious to see. Also, everybody knows 
                    about them.

                    To be able to sustain a food and beverage business the first essential ingredient is to be able 
                    to make good food. Whether you are a chef or hiring multiple chefs, or even starting your own 
                    bakery, you need to know what your potential customer wants or in the other words, create the 
                    want for your product offerings.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={mf_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
            
            ),
            trigger:'endd' 
        },
        {
            id:'clm',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Marketing Strategy about Clothes
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/msc.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                Every fashion brand needs a good marketing strategy in place to help it stay ahead of its competition. 
                A good strategy will not only help them stay afloat in the treacherous sea that is E-commerce, but also 
                grow as others flounder in confusion. As for you, it doesn’t matter if you’re brand new to the fashion 
                world or a seasoned veteran — no matter where you lie, you need an effective marketing strategy.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={mc_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:'itm',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Marketing Strategy about Information Technology
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/msit.png')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    Marketing strategies are vital to the success of any tech company. That’s not news. But let’s face it. 
                    Budget matters. Not all companies have the wherewithal to do what some of the biggies do. For instance, 
                    Salesforce and Tableau each spent a whopping 53% of their revenue on sales and marketing in 2014, while 
                    Constant Contact spent 38% and Manhattan Associates 12%.

                    But before you laugh or throw your hand up in despair, there are marketing strategies for tech companies 
                    on a shoestring that can keep you competitive and successful. A more typical and recent spend on marketing 
                    for tech companies is about 15% of their total annual budget.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={mit_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:'elem',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Marketing Strategy about Electronic Items
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/mselec.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    You opened an online consumer electronics shop because you saw the enormous demand for these types of products, 
                    but you didn’t think of the following:
                        The huge number of competitors (Amazon, big department stores, etc.)
                        The small profit margins
                        The stock, which sometimes becomes obsolete
                        And that stops your shop from growing.

                    Having an online business is great because you cut down on costs, but it forces you to constantly update your 
                    marketing strategy so that the giants don’t make a clean sweep of the market.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={melec_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:17,
            message:'May you suggest me in which Domain',
            trigger:20,
        },
        {
            id:20,
            options:[
                {value:'food' , label:'food' , trigger:'fs'},
                {value:'Clothes' , label:'Clothes' , trigger:'cls'},
                {value:'Information Technology' , label:'Information Technology' , trigger:'its'},
                {value:'Electronics' , label:'Electronics' , trigger:'eles'},
            ]
        },
        {
            id:'fs',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Sale Analyst around the World for Food
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/sf.png')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    Revenue in the Food market amounts to US$7,215,861m in 2020. The market is expected to grow 
                    annually by 4.4% (CAGR 2020-2025).
                    The market's largest segment is the segment Confectionery and Snacks with a market volume of US$1,254,823m in 2020.
                    In global comparison, most revenue is generated in China (US$1,187,453m in 2020).
                    In relation to total population figures, per person revenues of US$969.54 are generated in 2020.
                    The average per capita consumption stands at 306.0 kg in 2020.
                    Dairy Products , EggsMeatFish , SeafoodFruits , NutsVegetablesBread , Cereal productsOils , FatsSauces , SpicesConvenience 
                    FoodSpreads , SweetenersConfectionery , SnacksBaby FoodPet Food
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={sf_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:'cls',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Sale Analyst around the World for Clothes
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/sc.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    The global apparel market is projected to grow in value from 1.3 trillion U.S. 
                    dollars in 2015 to about 1.5 trillion dollars in 2020, showing that the demand 
                    for clothing and shoes is on the rise across the world. The regional distribution 
                    of the demand share of apparel is expected to stay mostly consistent in that period, 
                    although the Asia Pacific region had the highest level of growth at four percent. 
                    The three world regions with the largest apparel markets are the 28 member states 
                    of the European Union, the United States, and China, in descending order. In 2017, 
                    the apparel category with the highest level of global market growth was sportswear 
                    at 6.8 percent.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={sc_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:'its',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Sale on Ecommerce business
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/sit.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    It goes by many names — cross-border commerce, borderless business, international online 
                    retail. But more important than what it is, is what it isn’t. Global ecommerce is not a 
                    luxury. It’s not one strategy among many. Going global is a necessity.

                    Unfortunately, it’s also fraught with questions. Where to invest? What countries present 
                    the best product-market fit? How do you attract non-local buyers? Which is most important: 
                    translation, currencies, payment options, or something else entirely? 
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={sit_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:'eles',
            component:(
                <View>
                <Text 
                    style={{
                            fontSize:24, 
                            fontStyle:'italic', 
                            fontFamily:'Times New Roman', 
                            fontWeight:'bold', 
                            color:'#dc143c'
                         }}> 
                        Sale chart on Electronic Items
                </Text>
                <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/se.jpg')} 
                    style={{
                        width:'100%', 
                        height:250
                        }} 
                />
                <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:'#9932cc'
                }}>
                    Descriptions:
                </Text>
                <Text style={{fontSize:14}}>
                    The graph shows global unit sales of major domestic appliances from 2006 to 2019. For 2018, 
                    sales of major domestic appliances are forecast to reach 549 million units.
                    The domestic appliance industry is projected to grow in the coming years in response to the 
                    high demand for electrical devices needed in the household.

                    Over the last 10 years, sales of global major domestic appliances have shown a steady upward 
                    trend. In 2018, about 550 millions major appliances are estimated to be sold worldwide. 
                    Sales of major appliances, such as washing machines, tumble dryers, dishwashers, refrigerators, 
                    freezers, cookers, ovens, hobs, hoods, or microwave ovens, are included in this segment. In 2014, 
                    the biggest regional markets in the major household appliance industry were Europe, including the 
                    Commonwealth of Independent States, and the Asian countries. Both regions combined comprised more 
                    than half of worldwide sales in major home appliances as well as small home appliances. 
                    The United States remained in third in the market, with a 15 percent share of major appliances 
                    and a 24 percent share of small appliances.
                </Text>
                <Text>For more Information click on Get More!</Text>
                    <View style={{paddingLeft:50, paddingRight:50 , paddingTop:25}}>
                        <TouchableOpacity>
                            <OpenURLButton url={selec_Link} >Get More!</OpenURLButton>
                        </TouchableOpacity>
                    </View>
            </View>
           
            ),
            trigger:'endd' 
        },
        {
            id:'endd',
            message:'May you give me your feedback',
            trigger:111,
        },
        {
            id:111,
            options:[
                {value:'Love' , label:'Love', trigger:'lov'},
                {value:'Like' , label:'Like' , trigger:'like'},
                {value:'Fair' , label:'Fair' , trigger:'woww'},
                {value:'unlike' , label:'Unlike' , trigger:'unlike'},
            ]
        },
        {
            id:'lov',
            component:(
                <View style={{justifyContent:'center', alignContent:'center',  }}>
                    <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/Love.jpg')} style={{width:200,height:150}} />
                </View>
                ),
            trigger:'aa'
        },
        {
            id:'like',
            component:(
                <View style={{justifyContent:'center', alignContent:'center',  }}>
                    <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/lik.png')} style={{width:150,height:150}} />
                </View>
                ),
            trigger:'aa'
        },
        {
            id:'woww',
            component:(
                <View style={{justifyContent:'center', alignContent:'center',  }}>
                    <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/wow.png')} style={{width:150,height:150}} />
                </View>
                ),
            trigger:'ab'
        },
        {
            id:'unlike',
            component:(
                <View style={{justifyContent:'center', alignContent:'center',  }}>
                    <Image source={require('E:/My Final Year Project/Continuaus_Page/imagess/unlik.png')} style={{width:210,height:150}} />
                </View>
                ),
            trigger:'az'
        },
        {
            id:'aa',
            message:'I m glade by your feedback, Thank You so much',
            trigger:'mor',
        },
        {
            id:'ab',
            message:'Thanks For you Feedback,I will try to do better',
            trigger:'mor',
        },
        {
            id:'az',
            message:'Yes may be! But i try it again for better work, Thanks For your feedback',
            trigger:'mor',
        },
        {
            id:'ends',
            message:'Its your Choice, Thanks for coming here',
            end:true,
        },
        {
            id:'mor',
            message:'If you enjoy it,You can continue',
            trigger:'next',
        },
        {
            id:'next',
            message:'which job you want to perform by me again',
            trigger:11,
        }
    ]
function MyChat(){
        return(
            <View>
               <ChatBot steps={Step} />
            </View>
        );
    }
export default MyChat;
    

