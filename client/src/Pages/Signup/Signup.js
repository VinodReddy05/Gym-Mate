

const Signup = () => {
  return (
    <div className="main-form">
    <form  >
    <h1>Signup</h1>
     <div className="field">
     <label htmlFor="">Email:</label>
     <input
       type="Email"
       name="title"
      
     />
     </div>
    <div className="field">
    <label htmlFor="">Password:</label>
     <input
       type="Password"
       name="reps"
      
     />
    </div>
   
     <button>submit</button>
   </form>
</div>
  )
}

export default Signup