import React from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import './Home.css';
import * as styles from './../../assets/styles';
import Example from './../../containers/Example/Example';
import { Typography } from '@material-ui/core';

const home = (props) => {
    const seconds = 30;
    return <main><h1>Little Joy - personal heartfelt digital vouchers</h1>
    <ContentCard><Typography>Welcome to Little Joy - create personal heartfelt digital vouchers for your friends, family, colleagues and the people you love!</Typography></ContentCard>
<article>
    <ContentCard title={"How does it work?"}>
        <ol><li><Typography>Register with your e-mail address</Typography></li>
        <li><Typography>Create your Little Joy gift card. Therefore enter the date of the event, a preview text with a placeholder 
            containing the remaining seconds, your Little Joy greeting text  which will show up beneath the gift box and the actual Little Joy Text which will appear after your recipient clicks in the gift. He can only see the preview text until the event date.
            You should also choose a style.</Typography>
        </li><li><Typography>After your Little Joy gift card has been created,  you can share it as a link or a QR code!</Typography></li>
        </ol>
   </ContentCard>
</article>
<article>
    <ContentCard title={"Some examples..."}>
        <div className={"example-box"}>
            <Example seconds={seconds} cssStyle={styles.style01.style} 
                previewText={"Your nerd bag is ready in <seconds> seconds..."} 
                presentBoxText={"Nerdy happy birthday!"} presentImg={styles.style01.img}
                presentText={"This year you will get a new computer."}/>
            <Example seconds={seconds} cssStyle={styles.style02.style} 
                previewText={"A little joy is waiting for you and can be viewed in <seconds> seconds..."} 
                presentBoxText={"My little darling, please click me!"} presentImg={styles.style02.img}
                presentText={"I love you! On Saturday 3rd Oct we will eat out in OUR restaurant"}/>
            <Example seconds={seconds} cssStyle={styles.style03.style} 
                previewText={"Next Valentine's day will be in <seconds> seconds..."} 
                presentBoxText={"Happy Valentine's day!"} presentImg={styles.style03.img}
                presentText={"I send you these digital flowers because I love you so much. We cannot spend this day together this year but soon we will be reunited. I LOVE YOU!"}/>
        </div>
   </ContentCard>
</article>
    </main>;
}

export default home;