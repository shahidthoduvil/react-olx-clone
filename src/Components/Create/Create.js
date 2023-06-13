import React, { Fragment, useContext, useState } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { FirebaseContext, AuthContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const Create = () => {

  const { user, setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState()
  const [image, setImage] = useState()
  const date = new Date()
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.storage().ref(`/images/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        firebase.firestore().collection('products').add({
          name,
          category,
          price,
          url,
          userId: user.uid,
          createdAt: date.toDateString()
        })
      }).catch(err => alert(err, "  can't upload"))
      history.push('/')
    }).catch(err => alert(err))
  }

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
            <br />
            <br />
            {image ? <img alt="Posts" width="200px" height="200px" src={URL.createObjectURL(image)}></img> : null}
            <br />
            <input type="file" onChange={(e) => {
              if (e.target.value[0] != null)
                setImage(e.target.files[0])
            }}

            />
            <br />
            <button type='submit' className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};
export default Create;