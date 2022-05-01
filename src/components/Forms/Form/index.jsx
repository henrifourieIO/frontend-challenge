import React, { useState } from 'react'
import TextInput from '../TextInput'
import RadioButton from '../RadioInput'
import Button from '../../Buttons/DefaultButton'

const Form = ({ setOpen }) => {
    const [gender, setGender] = useState("male");
    const [membership, setMembership] = useState("silver");
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [id, setId] = useState('');

    const [nameError, setNameError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [idError, setIdError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        email.includes('@') ? setEmailError(false) : setEmailError(true);
        name.length > 3 ? setNameError(false) : setNameError(true);
        mobile.length >= 10 ? setMobileError(false) : setMobileError(true);
        id.length == 13 ? setIdError(false) : setIdError(true);
        date ? setDateError(false) : setDateError(true);

        if (
            !nameError && !dateError && !emailError && !mobileError && !idError
        ) {
            console.log('form submitted')
        }
    }

    const handleCancel = () => {
        //Form value states
        setGender('male');
        setDate('');
        setEmail('');
        setId('');
        setMembership('silver');
        setMobile('');
        setName('');

        // Form error states
        setNameError(false);
        setDateError(false);
        setEmailError(false);
        setMobileError(false);
        setIdError(false);
    }

    return (
        <div className="formWrapper">
            <form onSubmit={(e) => handleSubmit(e)}>
                {/* NAME FIELD */}
                <TextInput label="Name" type="text" placeholder="John Doe" name="name" error={nameError} value={name} setValue={setName} />

                {/* GENDER FIELD */}
                <div className="formRadio">
                    <label>Gender</label>
                    <div className='radioWrapper'>
                        <RadioButton
                            onClick={() => setGender("male")}
                            icons={
                                {
                                    active: '/images/mars-symbol--white.svg',
                                    unactive: '/images/mars-symbol.svg',
                                }}
                            label="Male"
                            active={gender == 'male' ? true : false}
                        />
                        <RadioButton
                            onClick={() => setGender("female")}
                            icons={
                                {
                                    active: '/images/venus-symbol--white.svg',
                                    unactive: '/images/venus-symbol.svg',
                                }}
                            label="Female"
                            active={gender == 'female' ? true : false}
                        />
                    </div>

                </div>

                {/* DATE OF BIRTH FIELD */}
                <TextInput type="date" label="Date of Birth" name="date-of-birth" placeholder="" error={dateError} value={date} setValue={setDate} />

                {/* EMAIL FIELD */}
                <TextInput type="email" label="Email" name="email" placeholder="john@doe.co.za" error={emailError} value={email} setValue={setEmail} />

                {/* MOBILE FIELD */}
                <TextInput type="number" label="Mobile" name="mobile" placeholder="+1234567890" error={mobileError} value={mobile} setValue={setMobile} />

                {/* ID FIELD */}
                <TextInput type="number" label="Customer ID" name="id" placeholder="961205023085" error={idError} value={id} setValue={setId} />

                {/* MEMBERSHIP FIELD */}
                <div className="formRadio">
                    <label>Membership</label>
                    <div className='radioWrapper'>
                        <RadioButton
                            onClick={() => setMembership("classic")}
                            icons={
                                {
                                    active: '/images/card--white.svg',
                                    unactive: '/images/card.svg',
                                }}
                            label="Classic"
                            active={membership == 'classic' ? true : false}
                        />
                        <RadioButton
                            onClick={() => setMembership("silver")}
                            icons={
                                {
                                    active: '/images/card--white.svg',
                                    unactive: '/images/card.svg',
                                }}
                            label="Silver"
                            active={membership == 'silver' ? true : false}
                        />
                        <RadioButton
                            onClick={() => setMembership("gold")}
                            icons={
                                {
                                    active: '/images/card--white.svg',
                                    unactive: '/images/card.svg',
                                }}
                            label="Gold"
                            active={membership == 'gold' ? true : false}
                        />
                    </div>
                </div>
            </form>

            <div className="formButtons">
                <Button color='secondary' onClick={() => handleCancel()}>Cancel</Button>
                <Button color='primary'>Save</Button>
            </div>
        </div>
    )
}

export default Form