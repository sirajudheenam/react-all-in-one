import React from 'react';

export default function FormHandling() {

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        email: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log("Updated formData", formData);
    };

    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <h1>FormHandling</h1>
            <form action="">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Enter your first name" name='firstName' value={formData.firstName} onChange={handleChange} />
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Enter your last name" name="lastName" value={formData.lastName} onChange={handleChange} />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}
