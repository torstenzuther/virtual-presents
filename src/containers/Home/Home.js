import React from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import './Home.css';
import * as styles from '../../assets/styles';
import Example from '../Example/Example';
import Text from '../../components/Text/Text';
import AnimatedText from '../../components/AnimatedText/AnimatedText';


const home = (props) => {
    const seconds = 30;
    return (
        <main>
        <ContentCard>
            <AnimatedText>Little Joy - personal digital gift cards</AnimatedText>
            <Text>Welcome to Little Joy - create personal digital gift cards for your friends, family, colleagues and the people you love!</Text></ContentCard>
            <article>
                <ContentCard title={"How does it work?"}>
                    <ol><li><Text>Register with your e-mail address</Text></li>
                    <li><Text>Create your Little Joy gift card. Therefore enter the date of the event, a preview text with a placeholder 
                        containing the remaining seconds, your Little Joy greeting text  which will show up beneath the gift box and the actual Little Joy Text which will appear after your recipient clicks in the gift. He can only see the preview text until the event date.
                        You should also choose a style.</Text>
                    </li><li><Text>After your Little Joy gift card has been created,  you can share it as a link or a QR code!</Text></li>
                    </ol>
                </ContentCard>
            </article>
            <article>
                <ContentCard title={"Some examples..."}>
                    <div className={"example-box"}>
                        <Example seconds={seconds} cssStyle={styles.style01.style} 
                            previewText={"Your nerd bag is ready in <seconds> seconds..."} 
                            presentBoxText={"Nerdy happy birthday!"} presentComponent={styles.style01.component}
                            presentText={"This year you will get a new computer."}/>
                        <Example seconds={seconds} cssStyle={styles.style02.style} 
                            previewText={"A little joy is waiting for you and can be viewed in <seconds> seconds..."} 
                            presentBoxText={"My little darling, please click me!"} presentComponent={styles.style02.component}
                            presentText={"I love you! On Saturday 3rd Oct we will eat out in OUR restaurant"}/>
                        <Example seconds={seconds} cssStyle={styles.style03.style} 
                            previewText={"Next Valentine's day will be in <seconds> seconds..."} 
                            presentBoxText={"Happy Valentine's day!"} presentComponent={styles.style03.component}
                            presentText={"I send you these digital flowers because I love you so much. We cannot spend this day together this year but soon we will be reunited. I LOVE YOU!"}/>
                    </div>
                </ContentCard>
            </article>
    </main>);
}

export default home;