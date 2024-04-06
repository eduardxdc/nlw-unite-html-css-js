// this variable is an array of objects that contains information about the attendees of an event;
let participants = [
    {
        name: '@eduardxdc',
        email: 'eduardxdc@proton.me',
        dateRegistration: new Date(2024, 3, 3, 12, 0),
        dateCheckIn: new Date(2024, 3, 3, 12, 0),
    },
    {
        name: "Diego Fernandes",
        email: "diego@gmail.com",
        dateRegistration: new Date(2024, 3, 4, 12, 0),
        dateCheckIn: new Date(2024, 3, 4, 12, 0),
    },
    {
        name: "Mayk Brito",
        email: "mayk@gmail.com",
        dateRegistration: new Date(2024, 3, 5, 12, 0),
        dateCheckIn: null
    },
    {
        name: "Ana Souza",
        email: "ana@gmail.com",
        dateRegistration: new Date(2024, 3, 6, 12, 0),
        dateCheckIn: new Date(2024, 3, 6, 12, 0),
    },
    {
        name: "João Silva",
        email: "joao@gmail.com",
        dateRegistration: new Date(2024, 3, 7, 12, 0),
        dateCheckIn: new Date(2024, 3, 7, 12, 0),
    },
    {
        name: "Maria Oliveira",
        email: "maria@gmail.com",
        dateRegistration: new Date(2024, 3, 8, 12, 0),
        dateCheckIn: null
    },
    {
        name: "Pedro Santos",
        email: "pedro@gmail.com",
        dateRegistration: new Date(2024, 3, 9, 12, 0),
        dateCheckIn: new Date(2024, 3, 9, 12, 0),
    },
    {
        name: "Carla Lima",
        email: "carla@gmail.com",
        dateRegistration: new Date(2024, 3, 10, 12, 0),
        dateCheckIn: new Date(2024, 3, 10, 12, 0),
    },
    {
        name: "Lucas Sousa",
        email: "lucas@gmail.com",
        dateRegistration: new Date(2024, 3, 11, 12, 0),
        dateCheckIn: new Date(2024, 3, 11, 12, 0),
    },
    {
        name: "Paula Costa",
        email: "paula@gmail.com",
        dateRegistration: new Date(2024, 3, 12, 12, 0),
        dateCheckIn: null
    },
    {
        name: "Gabriel Almeida",
        email: "gabriel@gmail.com",
        dateRegistration: new Date(2024, 3, 13, 12, 0),
        dateCheckIn: null
    }
];

// this constant is responsible for creating a new participant;
const createNewParticipant = (participant) => {

    const dateRegistration = dayjs(Date.now()).to(participant.dateRegistration) // dayJS is a library that formats dates;
    let dateCheckIn = dayjs(Date.now()).to(participant.dateCheckIn) // here it is being used to format the registration and check-in date;

    // conditional 
    if (participant.dateCheckIn == null) {
        // if the participant's check-in date is null, the field becomes a confirmation button;
        dateCheckIn = ` 
            <button 
            data-email='${participant.email}'
            onclick='doCheckIn(event)'>
                Confirm check-in
            </button>
        `
    }

    // if not null, returns the default;
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
};

const updateList = (participants) => {

    // defines the output variable as an empty string;
    let output = '';

    // for each participant, it creates a new participant and adds it to the output;
    for (let participant of participants) {
        output += createNewParticipant(participant);
    }

    // here it takes the tbody from the html and adds the output;
    document.querySelector('tbody').innerHTML = output;
};

// here it calls the updateList function and passes the list of participants;
updateList(participants);

const addParticipant = (event) => {
    event.preventDefault(); // does not perform the standard event of submitting the form;

    const dataForm = new FormData(event.target); // this function gets the target of the submit event, in this case the form;

    // here it creates a new participant with the form data;
    const participant = {
        name: dataForm.get('username'),
        email: dataForm.get('email'),
        dateRegistration: new Date(),
        dateCheckIn: null
    };

    // here it checks if the email already exists in the list of participants;
    const participantExists = participants.find((p) => p.email == participant.email);

    // if the participant already exists, it returns an alert;
    if (participantExists) {
        alert('E-mail already registered!')
        return
    };

    // if it does not exist, it adds the participant to the list;
    participants = [participant, ...participants]; // spread: placing all participants again;

    updateList(participants);

    // here it clears the form fields;
    event.target.querySelector("[name='username']").value = '';
    event.target.querySelector("[name='email']").value = '';

};

const doCheckIn = (event) => {

    // here I declare a message and use it in my check-in confirmation, if it is 'false' the conditional returns;
    const ConfirmationMessage = 'Do you want to check in?';
    if (confirm(ConfirmationMessage) == false) {
        return
    }

    // in this function I find the participant within the list and check if the email already exists;
    const participant = participants.find((p) => {
        return p.email == event.target.dataset.email;
    })

    // if the participant confirms check-in, pulls the current time;
    participant.dateCheckIn = new Date();

    updateList(participants);
};
