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
    <section><ContentCard title={"You have no idea what to buy"}><Typography>Your friend's birthday is in three days but you don't have a present yet. You have  a few options: you could give him the same bottle of booze  as  you did  last year, you could order something online and hope for it to arrive in time - whilst still not knowing what to buy. Why don't you gift him something personal in a very special way: a little joy gift card.</Typography></ContentCard>
    </section>
    <section><ContentCard title={"You are miles apart"}><Typography>You are miles away from your friend but you still want to send him or her some nice wishes and make him smile or you cannot go to their birthday party but want to send him your wishes. You can just send him a postcard but this is often too official so it is much easier to share it online. Little joy gift cards are perfect for this.</Typography></ContentCard>
    </section>
    <section><ContentCard title={"Because they have everything already"}><Typography>You don't know what to buy for your friends because they just have everything. But you cannot buy time. Why don't you just make the best gift in the world? Gift them  your time. Share it with a little joy gift card online to make it something special.</Typography></ContentCard>
    </section>  
    <section><ContentCard title={"You want to share your excitement"}><Typography>You want to share your excitement with a friend, your familiy  or your colleagues? This could be an anniversary, a birthday, someone's wedding or just YOUR day. Send them  a little joy gift card with a countdown  message. They will only be able to see the gift card when  the countdown  is over.</Typography></ContentCard>
    </section>
    <section><ContentCard title={"Send your Little Joy gift card now"}><Typography>You can send little joy gift cards as a link or you can also print them as a QR code which leads  them  back to their little joy gift card. Your little joy gift card will stay there forever - no need to keep any paper.</Typography></ContentCard>
    </section>
</article>
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