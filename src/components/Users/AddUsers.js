import React, { useState } from 'react'

import Card from  '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal'

const AddUsers = (props) => {

    const [prevUsers, setNewUserNameAge] = useState({
        username: '',
        userage: ''
    })

    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        if (prevUsers.username.trim().length === 0 || prevUsers.userage.trim().length === 0 ) {
            setError({
                title: 'Invalid Input',
                msg: 'Please Enter a Valid Name and Age (Non empty values).'
            })
            return
        }

        if (prevUsers.userage < 1 ) {
            setError({
                title: 'Invalid Age',
                msg: 'Please Enter a Valid Age (> 0).'
            })
            return
        }

        const userData = {
            userName: prevUsers.username,
            userAge: prevUsers.userage
        }

        props.onAddUser(userData)

        setNewUserNameAge({
            username: '',
            userage: ''
        })
    }

    const userNameHandler = (event) => {
        setNewUserNameAge( prevData => {
            return { ...prevData, username: event.target.value}
        })
    }

    const userAgeHandler = (event) => {
        setNewUserNameAge( prevData => {
            return { ...prevData, userage: event.target.value}
        })
    }
    const errorHandler = () => {
        setError(null)
    }
  return (
    <div>
    {error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler} />}
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" value={prevUsers.username} type="text" onChange={userNameHandler} />
            <label htmlFor="user-age">Age (years)</label>
            <input id="user-age" value={prevUsers.userage} type="number" onChange={userAgeHandler} />
            <Button type="submit">Add User</Button>
        </form>
    </Card>
    </div>
  )
}

export default AddUsers