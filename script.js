// this variable is an array of objects that contains information about the attendees of an event;
let participants = [
    {
        name: 'eduardxdc',
        email: 'eduardxdc@proton.me.com',
        dateRegistration: new Date(2024, 3, 3, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Diego Fernandes",
        email: "diego@gmail.com",
        dateRegistration: new Date(2024, 3, 4, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Mayk Brito",
        email: "mayk@gmail.com",
        dateRegistration: new Date(2024, 3, 5, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Ana Souza",
        email: "ana@gmail.com",
        dateRegistration: new Date(2024, 3, 6, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "João Silva",
        email: "joao@gmail.com",
        dateRegistration: new Date(2024, 3, 7, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Maria Oliveira",
        email: "maria@gmail.com",
        dateRegistration: new Date(2024, 3, 8, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Pedro Santos",
        email: "pedro@gmail.com",
        dateRegistration: new Date(2024, 3, 9, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Carla Lima",
        email: "carla@gmail.com",
        dateRegistration: new Date(2024, 3, 10, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Lucas Sousa",
        email: "lucas@gmail.com",
        dateRegistration: new Date(2024, 3, 11, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Paula Costa",
        email: "paula@gmail.com",
        dateRegistration: new Date(2024, 3, 12, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Gabriel Almeida",
        email: "gabriel@gmail.com",
        dateRegistration: new Date(2024, 3, 13, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    }
];

// this constant is responsible for creating a new participant;
const createNewParticipant = (participant) => {

    const dateRegistration = dayjs(Date.now()).to(participant.dateRegistration) // dayJS is a library that formats dates;
    const dateCheckIn = dayjs(Date.now()).to(participant.dateCheckIn) // here it is being used to format the registration and check-in date;

    return `
        <tr>
            <td>
                <strong>
                    ${participant.name} 
                </strong>
                <br>
                <small>
                    ${participant.email}
                </small>
            </td>
            <td>
                ${dateRegistration}
            </td>
            <td>
                ${dateCheckIn}
            </td>
        </tr>
        `
}

const updateList = (participants) => {

    let output = '';

    for (let participant of participants) {
        output += createNewParticipant(participant);
    }

    document.querySelector('tbody').innerHTML = output;
}

updateList(participants);