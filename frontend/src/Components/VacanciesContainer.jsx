import { useEffect, useState } from "react";
import VacancyCard from "./VacancyCard.jsx";
import getVacancies from "../api/vacancies.js";


const VacanciesContainer = () => {
const [vacancies, setVacancies] = useState(null);

// useEffect(() => {
//     const requestData = async () => {
//         setVacancies(await getVacancies());
//     }

//     requestData();
//     // console.log(vacancies)
// }, [])

useEffect(() => {
    fetch('https://dashas-mock-server.vercel.app/vacancies')
      .then(response => response.json())
      .then(data => setVacancies(data))
      .catch(error => console.error(error));
  }, []);

if ( vacancies === null ) {
    return <div>Loading...</div>
}

return(
    <div>
        { vacancies.map((vacancy) => <VacancyCard key={vacancy.id} title={vacancy.position} wages={vacancy.wages} experience={vacancy.yearsOfExperience} />) }
    </div>
);

}

export default VacanciesContainer;