// function Contactus()
// {
//     return(
//         <>
//         <h1>This is contactus page</h1>
//         <h1>It provides the detailed information from user</h1>
//         </>
//     )
// }
// export default Contactus;

function Contactus() {
    return (
        <div className="container mt-5">
            <div className="card p-4 shadow-lg bg-light">
                <h1 className="text-primary text-center">Contact Us</h1>
                <p className="lead text-center">
                    If you have any queries, feel free to reach out to us. We provide detailed 
                    information and support to our users.
                </p>

                {/* Contact Information */}
                <div className="mt-4">
                    <h4 className="text-secondary">Contact Details:</h4>
                    <ul className="list-group">
                        <li className="list-group-item">📞 Phone: +1 234 567 890</li>
                        <li className="list-group-item">✉ Email: support@grocerystore.com</li>
                        <li className="list-group-item">📍 Address: 123 Main St, City, Country</li>
                    </ul>
                </div>

                {/* Contact Form */}
                <form className="mt-4">
                    <div className="mb-3">
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" placeholder="Enter your name" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Email</label>
                        <input type="email" className="form-control" placeholder="Enter your email" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Your Message</label>
                        <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contactus;