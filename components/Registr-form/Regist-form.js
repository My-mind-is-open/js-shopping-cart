

class RegistForm {


	showForm() {
		const home = document.querySelector('.home');
		home.classList.add('show');
		console.log('111')
	}
	closeform() {
		const home = document.querySelector('.home');
		home.classList.remove('show');
	}

	changeTypeInput(e) {
		let getPwInput = e.parentElement.querySelector('input');

		if (getPwInput.type === 'password') {
			getPwInput.type = 'text';
			e.classList.replace("uil-eye-slash", 'uil-eye')
		} else {
			getPwInput.type = 'password';
			e.classList.replace('uil-eye', "uil-eye-slash")
		}
	}
	loginSignup() {
		const formContainer = document.querySelector('.form_container');
		formContainer.classList.add('active');
	}
	showLogin() {
		const formContainer = document.querySelector('.form_container');
		formContainer.classList.remove('active');
	}
	render() {



		const html = `
		<div class="home">
		<div class="form_container">
			<i class="uil uil-times form_close" onclick="registrPage.closeform()"></i>
			<!-- Login From -->
			<div class="form login_form">
				<form action="#">
					<h2>Login</h2>
					<div class="input_box">
						<input type="email" placeholder="Enter your email" required />
						<i class="uil uil-envelope-alt email"></i>
					</div>
					<div class="input_box">
						<input type="password" placeholder="Enter your password" required />
						<i class="uil uil-lock password"></i>
						<i class="uil uil-eye-slash pw_hide "onclick="registrPage.changeTypeInput(this)"></i>
					</div>
					<div class="option_field">
						<span class="checkbox">
							<input type="checkbox" id="check" />
							<label for="check">Remember me</label>
						</span>
						<a href="#" class="forgot_pw">Forgot password?</a>
					</div>
					<button class="button log">Login Now</button>
					<div class="login_signup" >Don't have an account? <a href="#" id="signup" onclick="registrPage.loginSignup()" >Signup</a></div>
				</form>
			</div>
			<!-- Signup From -->
			<div class="form signup_form">
				<form action="#">
					<h2>Signup</h2>
					<div class="input_box">
						<input type="email" placeholder="Enter your email" required />
						<i class="uil uil-envelope-alt email"></i>
					</div>
					<div class="input_box">
						<input type="password" placeholder="Create password" required />
						<i class="uil uil-lock password"></i>
						<i class="uil uil-eye-slash pw_hide "onclick="registrPage.changeTypeInput(this)" ></i>
					</div>
					<div class="input_box">
						<input type="password" placeholder="Confirm password" required />
						<i class="uil uil-lock password"></i>
						<i class="uil uil-eye-slash pw_hide" onclick="registrPage.changeTypeInput(this)" ></i>
					</div>
					<button class="button log">Signup Now</button>
					<div class="login_signup">Already have an account? <a href="#" id="login" onclick="registrPage.showLogin()" >Login</a></div>
				</form>
			</div>
		</div>
	</div>

		`;
		ROOT_REGISTR_FORM.innerHTML = html;

	}
}
const registrPage = new RegistForm()