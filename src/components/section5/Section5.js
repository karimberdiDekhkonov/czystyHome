import React from 'react'
import "./Section5.css"
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Section5() {


    return (
        <>
            <div className='firstdiv'>
                <h1 className='lng-hone'>House cleaning services - hire CleanWhale and take care of your house</h1>
                <p className='lng-pone'>We all know that it is very hard to avoid mess in our houses. We don’t even know when, but sooner or later, it finally appears. Even the biggest cleaning fans, sometimes do not have the time or motivation to clean up all the rooms in their homes. A spotless house or apartment takes a lot of time. Also, you need to equip yourself with the necessary cleaning equipment and accessories, as well as purchase the necessary cleaning supplies. Many of us are still very reluctant to clean up and see it as an unpleasant duty. Cleaning requires us to organize and prepare a plan to do all the things in the shortest possible time. Therefore, to get more time, not to worry about the lack of motivation and have a guarantee of a perfectly cleaned apartment, you can cooperate with cleaning specialists from CleanWhale. Professional cleaning company provides <span id='span'> house cleaning services </span> , which can help you to get rid of the mess and bring the purity and freshness back to your home.</p>


                <h1 className='lng-hone'>House cleaning with CleanWhale - choose the best cleaning service company</h1>
                <p className='lng-pone'>Cooperation with qualified cleaning staff is a smart solution that will not only allow you to rest comfortably in a perfectly refreshed interior, but also help you save your precious time. Our professional team will help you to keep every room in your home clean. On our website you will find many additional options for <span id='span'>house cleaning </span>. Thanks to that, you can take care not only of basic cleaning like vacuuming or washing floors, but also cleaning closet, ironing clothes and sheets and also window cleaning. Our cleaning team is always open to additional customer requests and will take care of organizing each space with particular care. Extensive experience and hundreds of satisfied customers on the account guarantee full professionalism, services performed at the highest level and maintaining all standards. CleanWhale provides the necessary cleaning equipment and is always equipped with all cleaning supplies which are safe for your health and the environment.</p>


                <h1 className='lng-hone'>Need house cleaning services? Contact CleanWhale!</h1>
                <p className='lng-pone'>At CleanWhale’s, we always meet all the expectations and needs of our clients. Many years of experience in the cleaning industry, only positive opinions about the services and hundreds of signed contracts prove that CleanWhale is a company worth working with. Our staff consists of people with great commitment and appropriate qualifications, which results in the highest quality of work during each order. The CleanWhale’s <span id='span'> house cleaning </span> offer includes not only basic activities, such as vacuuming, washing floors and cleaning the kitchen or bathroom. For such an obvious package, we offer a selection of complementary services that will allow you to take care of the smallest details in your home. The CleanWhale team will make every effort to leave the apartment perfectly clean. Check out our <span id='span'> house cleaning </span> services and make an order today. You will not regret it!</p>
            </div>

            <div className='seconddiv'>
                <div className='pta'>
                    <p className='lng-subscribe'>Subscribe to Newsletter</p>
                    <input className='subscribe_input' type='text' maxLength="255" placeholder='Your e-mail adress'></input>
                    <button className='lng-subscribe_button'>Subscribe</button>
                    <p className='lng-subscribe_unsubscribe'>How to unsubscribe from the newsletter?</p>
                </div>
                <div className='social_network'>
                    {/* <a href="#!" className='facebook'><FacebookIcon style={{width: "3vw", height: "3.5vw"}}/></a> */}
                    <a href="https://www.instagram.com/czystyhome/" className='instagram'><InstagramIcon style={{width: "3vw", height: "3.5vw"}}/> </a>
                    <a href='http://t.me/Czystyhome_bot' className='telegram'><TelegramIcon style={{width: "3vw", height: "3.5vw"}}/></a>
                    {/* <a hraf='#!' className='youtube'><YouTubeIcon style={{width: "3vw", height: "3.5vw"}}/></a> */}
                </div>
            </div>
        </>
    )
}
