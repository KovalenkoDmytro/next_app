import Todos from "@/components/Todos"

export default function TodoesLayout({children}: {children: React.ReactNode}) {
    return (
      <section>
         <h1>Todos layout</h1>
      
   
        {children}
      </section>
    )
  }