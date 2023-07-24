import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { FaGoogle, FaEye, FaEyeSlash, FaGithub } from 'react-icons/fa';
import { app } from '../../firebase/firebase.config';

const LoginForm = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('Login page location', location);
    const from = location.state?.from?.pathname || '/';
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const { register, handleSubmit, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    useTitle('Login');

    const onSubmit = data => {
        const { email, password } = data;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            });
    };
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
            });
    };

    return (
        <div className="hero min-h-screen bg-orange-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl max-w-md mx-auto rounded-lg py-8 px-10 bg-sky-300">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="form-control">
                            <label htmlFor="email" className="label text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="input input-bordered"
                                placeholder="Enter your email"
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label htmlFor="password" className="label text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    className="input input-bordered pr-10"
                                    placeholder="Enter your password"
                                    {...register("password", { required: true })}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-2 text-gray-600"
                                    onClick={handleTogglePassword}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            {errors.password && <span className="text-red-600">Password is required</span>}
                        </div>

                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                        <br />
                    </form>
                    <div className='flex items-center justify-center'>
                        <div className="flex justify-center">
                            <button className="btn bg-red-500 hover:bg-red-600 mx-auto mt-5 mr-2" onClick={handleGoogleSignIn}>
                                <FaGoogle className="text-center mx-auto" />
                            </button>

                        </div>
                        <div className="flex justify-center">
                            <button className="btn bg-white hover:bg-red-600 mx-auto mt-5 mr-2" onClick={handleGitHubSignIn}>
                                <FaGithub className="text-center mx-auto" />
                            </button>

                        </div>
                    </div>
                    <p className="text-center mt-5 text-gray-700">
                        Don't have an account? <Link to="/register" className="text-orange-700 link link-hover">Register</Link>
                    </p>
                </div>
                {/* <div className="bg-sky-600">
                    <div className='flex justify-center items-center'>
                        <img src="https://i.ibb.co/cxyYczT/book-learn-education-removebg-preview.png" alt="" className="w-24 h-auto" />
                        <h1 className="text-2xl font-bold">College<span className='text-orange-500'>Spotlight</span></h1>
                    </div>
                    <h2>Login using</h2>
                    <div>

                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default LoginForm;


// https://collegespotlight-a53a2.firebaseapp.com/__/auth/handler