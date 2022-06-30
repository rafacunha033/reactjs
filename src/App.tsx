import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";
import { Event } from "./pages/Event";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}

export default App;






// import { gql, useQuery } from "@apollo/client";
// import { useEffect } from "react"
// import { client } from "./lib/apollo";


// const GET_LESSONS_QUERY = gql`
//   query {
//     lessons {
//       id
//       title

//       teacher {
//         name
//       }
//     }
//   }
// `

// interface Lesson {
//   id: string;
//   title: string;
// }

// function App() {
//   const { data } = useQuery(GET_LESSONS_QUERY)

//   return (
//     <ul>
//       {data?.lessons.map((lesson: Lesson) => {
//         return <li key={lesson.id}>{lesson.title}</li>
//       })}
//     </ul>

//   )
// }

// export default App
