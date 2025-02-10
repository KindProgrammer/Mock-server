const VacancyCard = (props) => {
    return <div>
        <h3>Вакансия: {props.title}</h3>
        <p>Зарплата от: {props.wages}</p>
        <p>Опыт работы: от {props.experience.from} до {props.experience.to}</p>
    </div>
}

export default VacancyCard;