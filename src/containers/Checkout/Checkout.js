import React from 'react';
import ContentCard from '../../components/ContentCard/ContentCard';
import Text from '../../components/Text/Text';

const checkout = (props) => {
    return (
        <ContentCard>
            <Text>Please buy your Little Joy digital gift card make it appear here!</Text>
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="RAG2ZX7THT384" />
                <input type="hidden" name="custom" value={props.presentId} />
                <input type="hidden" name="return" value={props.presentUrl} />
                <input type="image" src="https://www.paypalobjects.com/en_US/DE/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                <img alt="" border="0" src="https://www.paypalobjects.com/de_DE/i/scr/pixel.gif" width="1" height="1" />
            </form>
        </ContentCard>

    )
};

export default checkout;