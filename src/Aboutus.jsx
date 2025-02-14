// function Aboutus()
// {
//     return(
//         <h2>welcome to aboutus</h2>
//     )
// }
// export default Aboutus;




import 'bootstrap/dist/css/bootstrap.min.css';

function Aboutus() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title">Welcome to About Us Page</h2>
                            <p className="card-text">
                                We are a dedicated team bringing you the best products. 
                                Our mission is to provide quality and great customer service.
                            </p>
                            <p>
                                Feel free to browse our site, explore our offerings, and reach out if you have any questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;
