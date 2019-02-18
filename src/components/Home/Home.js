import React from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import './Home.css';

const home = (props) => {
    return <main><h1>Little Joy - personal heartfelt digital vouchers</h1>
    <ContentCard>Welcome to Little Joy - create personal heartfelt digital vouchers for your friends, family, colleagues and the people you love!</ContentCard>
<article>
    <section><ContentCard title={"You have no idea what to buy"}>Your friend's birthday is in three days but you don't have a present yet. You have  a few options: you could give him the same bottle of booze  as  you did  last year, you could order something online and hope for it to arrive in time - whilst still not knowing what to buy. Why don't you gift him something personal in a very special way: a little joy gift card.</ContentCard>
    </section>
    <section><ContentCard title={"You are miles apart"}>You are miles away from your friend but you still want to send him or her some nice wishes and make him smile or you cannot go to their birthday party but want to send him your wishes. You can just send him a postcard but this is often too official so it is much easier to share it online. Little joy gift cards are perfect for this.</ContentCard>
    </section>
    <section><ContentCard title={"Because they have everything already"}>You don't know what to buy for your friends because they just have everything. But you cannot buy time. Why don't you just make the best gift in the world? Gift them  your time. Share it with a little joy gift card online to make it something special.</ContentCard>
    </section>  
    <section><ContentCard title={"You want to share your excitement"}>You want to share your excitement with a friend, your familiy  or your colleagues? This could be an anniversary, a birthday, someone's wedding or just YOUR day. Send them  a little joy gift card with a countdown  message. They will only be able to see the gift card when  the countdown  is over.</ContentCard>
    </section>
    <section><ContentCard title={"Send your Little Joy gift card now"}>You can send little joy gift cards as a link or you can also print them as a QR code which leads  them  back to their little joy gift card. Your little joy gift card will stay there forever - no need to keep any paper.</ContentCard>
    </section>
</article>
<article>
    <ContentCard title={"How does it work?"}>
        <ol><li>Register with your e-mail address</li>
        <li>Create your Little Joy gift card. Therefore enter the date of the event, a preview text with a placeholder 
            containing the remaining seconds, your Little Joy greeting text  which will show up beneath the gift box and the actual Little Joy Text which will appear after your recipient clicks in the gift. He can only see the preview text until the event date.
            You should also choose a style.
        </li><li>After your Little Joy gift card has been created,  you can share it as a link or a QR code!</li>
        </ol>
   </ContentCard>
</article>
    </main>;
}

export default home;