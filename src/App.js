import './App.css';
import {useState,useEffect,useReducer} from "react"
import {db} from './firebase-config'
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from "firebase/firestore"
function App() {
  const [newName,setNewName] = useState('')
  const [newAge,setNewAge] = useState(0)
  const [users,setUsers] = useState([])
  const usersCollectionReference = collection(db,"users")
  //const [ignored, forceUpdate] = useReducer(x => x + 1, 0)

  const getUsers2 = async () =>{
        const data = await getDocs(usersCollectionReference)
        setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        //console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
   

  const createUser = async () => {
    await addDoc(usersCollectionReference, {name: newName, age: newAge}).then(getUsers2)
  }

  const updateUser = async (id,age) => {
    const userDoc = doc(db,"users",id)
    const newFields = {age: +age + 1}
    await updateDoc(userDoc,newFields).then(getUsers2)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db,"users",id)
    await deleteDoc(userDoc).then(getUsers2)
  }

  

  useEffect(()=>{
    
    const getUsers = async () =>{
        const data = await getDocs(usersCollectionReference)
        setUsers(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        //console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
    }
    getUsers()
  },[])
return(
    <div className="App">
        <input placeholder="name.." onChange={(event)=>{setNewName(event.target.value)}}/>
        <input placeholder="age.." type="number" onChange={(event)=>{setNewAge(event.target.value)}}/>
        <button onClick={createUser}>create user</button>
        {
            users.map(
                (user) => {
                    return(
                        <div>
                            {" "}
                            <h1>Name: {user.name}</h1>
                            <h1>Age: {user.age}</h1>
                            <button onClick={()=>{updateUser(user.id,user.age)}}>increase age</button>
                            <button onClick={()=>{deleteUser(user.id)}}>delete user</button>
                        </div>
                    )
                }
            )
        }
    </div>
)

}

export default App;
