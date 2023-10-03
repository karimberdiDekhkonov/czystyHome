import React from 'react'
import "./Section5.css"
// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { useTranslation } from "react-i18next";



export default function Section5() {
    
    const l  = localStorage.getItem("lng");
    const t = useTranslation();
    return (
        <>
            <div className='firstdiv'>
                <h1 className='lng-hone'>{l===`pl`?`Sprzątanie domów - zatrudnij CzystyHome i zadbaj o swój dom`:`House cleaning services - hire CzystyHome and take care of your house`}</h1>
                <p className='lng-pone'><span>{l===`pl`?`Wszyscy wiemy, że bardzo trudno jest uniknąć bałaganu w naszych domach. Nawet nie wiemy kiedy, ale prędzej czy później w końcu się pojawi. Nawet najwięksi miłośnicy sprzątania czasami nie mają czasu ani motywacji, aby posprzątać wszystkie pomieszczenia w swoich domach. Nieskazitelny dom lub mieszkanie zajmuje dużo czasu. Trzeba także wyposażyć się w niezbędny sprzęt i akcesoria do sprzątania, a także zakupić niezbędne środki czystości. Wielu z nas nadal niechętnie sprząta i postrzega to jako przykry obowiązek. Sprzątanie wymaga od nas zorganizowania i przygotowania planu, aby zrobić wszystko w jak najkrótszym czasie. Dlatego, aby zyskać więcej czasu, nie martwić się o brak motywacji i mieć gwarancję idealnie posprzątanego mieszkania, możesz nawiązać współpracę ze specjalistami ds. sprzątania z CzystyHome. Profesjonalna firma sprzątająca zapewnia`:`We all know that it is very hard to avoid mess in our houses. We don’t even know when, but sooner or later, it finally appears. Even the biggest cleaning fans, sometimes do not have the time or motivation to clean up all the rooms in their homes. A spotless house or apartment takes a lot of time. Also, you need to equip yourself with the necessary cleaning equipment and accessories, as well as purchase the necessary cleaning supplies. Many of us are still very reluctant to clean up and see it as an unpleasant duty. Cleaning requires us to organize and prepare a plan to do all the things in the shortest possible time. Therefore, to get more time, not to worry about the lack of motivation and have a guarantee of a perfectly cleaned apartment, you can cooperate with cleaning specialists from CzystyHome. Professional cleaning company provides `}</span><span id='span'>{l===`pl`?` usługi sprzątania domów`:` house cleaning services `} </span> , {l===`pl`?`które pomogą Ci pozbyć się bałaganu i przywrócić czystość i świeżość do Twojego domu.`:`which can help you to get rid of the mess and bring the purity and freshness back to your home.`}</p>
                

                <h1 className='lng-hone'>{l===`pl`?`Sprzątanie domu z CzystyHome - wybierz najlepszą firmę sprzątającą`:`House cleaning with CzystyHome - choose the best cleaning service company`}</h1>
                <p className='lng-pone'>{l===`pl`?`Współpraca z wykwalifikowaną kadrą sprzątającą to sprytne rozwiązanie, które nie tylko pozwoli Ci wygodnie odpocząć w doskonale odświeżonym wnętrzu, ale także pomoże Ci zaoszczędzić Twój cenny czas. Nasz profesjonalny zespół pomoże Ci utrzymać czystość w każdym pomieszczeniu w Twoim domu. Na naszej stronie znajdziesz wiele dodatkowych opcji `:`Cooperation with qualified cleaning staff is a smart solution that will not only allow you to rest comfortably in a perfectly refreshed interior, but also help you save your precious time. Our professional team will help you to keep every room in your home clean. On our website you will find many additional options for `}<span id='span'>{l===`pl`?`sprzątanie domu`:`house cleaning`} </span>. {l===`pl`?`Dzięki temu możesz zadbać nie tylko o podstawowe sprzątanie, takie jak odkurzanie czy mycie podłóg, ale także sprzątanie szafy, prasowanie ubrań i pościeli, a także mycie okien. Nasza ekipa sprzątająca jest zawsze otwarta na dodatkowe życzenia klientów i ze szczególną starannością zadba o uporządkowanie każdej przestrzeni. Bogate doświadczenie i setki zadowolonych klientów na koncie gwarantują pełen profesjonalizm, usługi wykonane na najwyższym poziomie i z zachowaniem wszelkich standardów. CzystyHome zapewnia niezbędny sprzęt sprzątający i jest zawsze wyposażony we wszystkie środki czystości, które są bezpieczne dla zdrowia i środowiska.`:`Thanks to that, you can take care not only of basic cleaning like vacuuming or washing floors, but also cleaning closet, ironing clothes and sheets and also window cleaning. Our cleaning team is always open to additional customer requests and will take care of organizing each space with particular care. Extensive experience and hundreds of satisfied customers on the account guarantee full professionalism, services performed at the highest level and maintaining all standards. CzystyHome provides the necessary cleaning equipment and is always equipped with all cleaning supplies which are safe for your health and the environment.`}</p>


                <h1 className='lng-hone'>{l===`pl`?`Potrzebujesz usług sprzątania domu? Skontaktuj się z CzystyHome!`:`Need house cleaning services? Contact CzystyHome!`}</h1>
                <p className='lng-pone'>{l===`pl`?`W CzystyHome’s zawsze wychodzimy naprzeciw wszelkim oczekiwaniom i potrzebom naszych klientów. Wieloletnie doświadczenie w branży sprzątającej, same pozytywne opinie o usługach i setki podpisanych umów udowadniają, że CzystyHome to firma, z którą warto współpracować. Naszą kadrę tworzą ludzie z dużym zaangażowaniem i odpowiednimi kwalifikacjami, co skutkuje najwyższą jakością prac przy każdym zleceniu. CzystyHome`:`At CzystyHome’s, we always meet all the expectations and needs of our clients. Many years of experience in the cleaning industry, only positive opinions about the services and hundreds of signed contracts prove that CzystyHome is a company worth working with. Our staff consists of people with great commitment and appropriate qualifications, which results in the highest quality of work during each order. The CzystyHome’s`} <span id='span'> {l===`pl`?` sprzątanie domu`:` house cleaning`} </span> {l===`pl`?`oferta obejmuje nie tylko podstawowe czynności, takie jak odkurzanie, mycie podłóg i sprzątanie kuchni czy łazienki. Za tak oczywisty pakiet oferujemy wybór usług uzupełniających, które pozwolą Ci zadbać o najmniejsze szczegóły w Twoim domu. Zespół CzystyHome dołoży wszelkich starań, aby mieszkanie było idealnie czyste. Sprawdź nasze`:`offer includes not only basic activities, such as vacuuming, washing floors and cleaning the kitchen or bathroom. For such an obvious package, we offer a selection of complementary services that will allow you to take care of the smallest details in your home. The CzystyHome team will make every effort to leave the apartment perfectly clean. Check out our`}  <span id='span'> {l===`pl`?` sprzątanie domu`:` house cleaning`} </span> {l===`pl`?`usług i złóż zamówienie już dziś. Nie będziesz żałować!`:`services and make an order today. You will not regret it!`}</p>
            </div>

            <div className='seconddiv'>
                <div className='pta'>
                    <p className='lng-subscribe'>{l===`pl`?`Zapisz się do newslettera`:`Subscribe to Newsletter`}</p>
                    <input className='subscribe_input' type='text' maxLength="255" placeholder={l===`pl`?`Twój adres mailowy`:`Your e-mail adress`}></input>
                    <button className='lng-subscribe_button' >{l===`pl`?`Subskrybuj`:`Subscribe`}</button>
                    <p className='lng-subscribe_unsubscribe'>{l===`pl`?`Jak wypisać się z newslettera?`:`How to unsubscribe from the newsletter?`}</p>
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
