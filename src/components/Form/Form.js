import { Component } from "react";
import shortid from 'shortid';

class Form extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        name: '',
        number: ''
    }

    nameInputId = shortid.generate();
    numberInputId = shortid.generate();

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({ [name]: value });

    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }
    reset = () => {
        this.setState({ name: '', number: '' })
    }
    render() {
        return (
            <>
                <h1>Phonebook</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={this.nameInputId}>Name</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.name}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handleChange}
                        id={this.nameInputId}
                    />
                    <br />
                    <label htmlFor={this.numberInputId}>Number</label>
                    <br />
                    <input
                        type="text"
                        value={this.state.number}
                        name="number"
                        required
                        onChange={this.handleChange}
                        id={this.numberInputId}
                    />
                    <br />
                    <button type="submit">Add contact</button>
                </form>

                <h2>Contacts</h2>
                <ul> {this.state.contacts.map(({ id, name, number }) => (
                    <li key={id} name={name} number={number}></li>
                ))}

                </ul>)
            </>
        )
    }
}

export default Form;