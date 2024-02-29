import logo from './my-tourism-app/src/Planet.png';


function Title(){
   
    return(
        <>
        <div className="img-">
        <img src={logo} className="logo" alt="logo" />
        <div className="about-list-icon">
									<ul>
										<li>
											<a href="https://www.facebook.com/profile.php?id=61555996584614" target="_blank">
												<i  class="fa fa-facebook" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="https://twitter.com/GalimakaK70487" target="_blank">
												<i  class="fa fa-twitter" aria-hidden="true"></i>
											</a>
											
										</li>
										<li>
											<a href="https://www.linkedin.com/in/galimaka-kirimunda-136679285/" target="_blank" >
												<i  class="fa fa-linkedin" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="https://www.instagram.com/?hl=en" target="_blank" >
												<i  class="fa fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
										
										
									</ul>
								</div>
        </div>
        </>
    );
}

export default Title