import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
export default async function Home({params: { lang }}: {params: { lang: Locale }}) {

  const dictionary = await getDictionary(lang)
 

  return (
    <main>
      {dictionary.page.home.title}
      
    </main>
  )
}
