import {useTranslations} from 'next-intl';

export default function NotFound(){
    const dictionary = useTranslations('page.notFound');
    return(
        <article>
            {dictionary('title')}
        </article>
    )
}