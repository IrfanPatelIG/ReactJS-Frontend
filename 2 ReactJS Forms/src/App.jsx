import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  }

  const onSubmit = async (data) => {
    await delay(3);
    console.log(data);
  }

  return (
    <>
      <section className="center">
        <form onSubmit={handleSubmit(onSubmit)} className='center'>
          <input type="text" {...register('userName', { required: "User name is required", minLength: {value: 3, message: "Min length is 3", maxLength: {value: 8, message: "Max length is 8"}}})} />
          {<p className='red'>{errors.userName?.message}</p>}

          <input type="password" name='password' {...register('password', {required: "Password is required", minLength: {value: 6, message: "Min length is 6"}})}/>
          {<p className='red'>{errors.password?.message}</p>}
          
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
