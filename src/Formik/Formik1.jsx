//npm i formik
//npm i uuid-=>for unique id

import { Formik } from 'formik';
import { v4 as uuidv4 } from 'uuid';
export default function Formik1(){
  const [data, setData] = useState([]);

const handleDelete = (id) => {
  setData((prev) => prev.filter((user) => user.id !== id)); //pathako user ra del user same bhayo bhane
};
  return(
    <div className="p-5">
      <Formik
        initialValues={{username:''}}
        onSubmit={(val,{resetForm})=>{
          console.log(val);
          setData((prev)=>[...prev,{
            username:val.username,
            id: uuidv4()
          }])
          resetForm(); //submit garesi reset gardincha
        }}
      >
        {({handleChange, handleSubmit, values})=>{
          return <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input 
                variant='bordered'
                // onChange={(e)=>e.target.value} 
                onChange={handleChange} //change hune bitikei yo line le handle change bhanne fxn lai call garcha
                label='username' 
                name="username" 
                value={values.username}
                />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        }}
      </Formik>


      {data.map((user, i)=>{
        return <div key={i}>
          <h1>{user.username}</h1>
          <Button onPress={()=>{handleDelete(user.id)}}>Delete</Button>
        </div>
      })}

    </div>
  )
}
