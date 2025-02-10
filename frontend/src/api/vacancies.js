const getVacancies = async () => {
    return fetch('https://dashas-mock-server.vercel.app/vacancies')
    .then(async (response) => {
        return response.json();
    })
}

export default getVacancies;