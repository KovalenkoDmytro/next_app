import Todos from "@/components/Todos"

export default function TodoesLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
         <h1>Todos layout</h1>
      
   
        {children}
      </section>
    )
  }