import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  }

  const onSubmit = async (data) => {
    await delay(2); // Simulating network delay
    if (data.userName !== "Irfan") {
      setError("myForm", {message: "Credentials are invalid!"});
      return;
    }
    console.log(data);
  }

  return (
    <>
      <section className="center">
        {isSubmitting && <div>Loading..</div>}
        {isSubmitSuccessful && <div className='green'>Form Submitted Successfully!</div>}
        <form onSubmit={handleSubmit(onSubmit)} >
          {errors.myForm && <div className='red'>{errors?.myForm?.message}</div>}
          <input type="text" {...register('userName', { required: "User name is required", minLength: {value: 3, message: "Min length is 3", maxLength: {value: 8, message: "Max length is 8"}}})} />
          {<p className='red'>{errors.userName?.message}</p>}

          <input type="password" name='password' {...register('password', {required: "Password is required", minLength: {value: 6, message: "Min length is 6"}})}/>
          {<p className='red'>{errors.password?.message}</p>}
          
          <button type="submit" disabled={isSubmitting}>Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
