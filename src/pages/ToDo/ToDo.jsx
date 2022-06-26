import React, {useState, useEffect} from "react";
import {PlaceHolderApi} from '../../api/placeHolderApi/placeHolderApi'
import { useParams } from 'react-router-dom'


function ToDo() {
    const params = useParams();
    const [todo, setTodo] = useState(undefined); 
    const [person, setPerson] = useState(undefined);
   
    const getToDoUser = async (id) => {
        const todo = await PlaceHolderApi.exacToDo(id);
        const person = await PlaceHolderApi.getUser(todo.userId);
        console.log(person)
        setTodo(todo)
        setPerson(person)
    }


    useEffect(() =>{
        getToDoUser(params.todoId);
    },[])

    if(todo === undefined || !person) {
        return <h1>Loading...</h1>
    }

    
    return(
        <>
            <div>Title: {todo.title}</div>
            <input type="checkbox" checked={todo.completed}/>
            <hr />
            <div>Name: {person.name}</div>
            <div>Username: {person.username}</div>
            <div>Email: {person.email}</div>
            <div>Addres: Street: {person.address.street} Suite: {person.address.suite} City: {person.address.city} Zipcode: {person.address.zipcode}</div>
            <div>Geo: {person.address.geo.lat} {person.address.geo.lng}</div>
            <div>Phone: {person.phone}</div>
            <div>Website: {person.website}</div>
            <div>Company: {person.company.name} CatchPhrase: {person.company.catchPhrase} BS: {person.company.bs}</div>
        </>
    )


}

export default ToDo