import React, { useContext, useState } from 'react'
import "./newproduct.css"
import axios from 'axios'



import { Publish } from "@mui/icons-material"
import { createMovie } from '../Context/movieContext/apiCall'
import { MoviesContext } from '../Context/movieContext/moviesContext'

const NewProduct = () => {
    const [movie, setMovie] = useState(null)
    const [img, setImg] = useState(null)
    const [imageTitle, setImageTitle] = useState(null)

    const [trailer, setTrailer] = useState()
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("")

    const { dispatch } = useContext(MoviesContext)

    const handelChange = (e) => {
        const value = e.target.value;
        setMovie({ ...movie, [e.target.name]: value })
    }




    const uploadImage = async (e) => {
        e.preventDefault()
        const form = new FormData();
        form.append("file", file)
        form.append("upload_preset", "ghadabenhssine");
        await axios.post('https://api.cloudinary.com/v1_1/ecomerce-site-web/upload', form).then((res) => setUrl(res.data.secure_url))
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        createMovie({ ...movie, url }, dispatch)
    }


    return (
        <div className='newProduct'>
            <h1 className="addProductTitle">New Movie</h1>
            <form className="addproductForm">
                <div className='addproductItem'>
                    <label>Image</label>
                    <input type="file" id="file" name="file" onChange={e => setFile(e.target.files[0])} />
                    <button className="userUpdateButton" onClick={uploadImage}>Upload</button>
                </div>
                {/* <div className='addproductItem'>
                    <label> Title Image</label>
                    <input type="file" id="imgTitle" name="imgTitle" onChange={e => setImageTitle(e.target.files[0])} />
                    <button className="userUpdateButton" onClick={uploadImage}>Upload</button>
                </div> */}

                <div className='addproductItem'>
                    <label>Title</label>
                    <input type="text" placeholder='Title' name="title" onChange={handelChange} />
                </div>
                <div className='addproductItem'>
                    <label>Description</label>
                    <input type="text" placeholder='description' name="desc" onChange={handelChange} />
                </div>
                <div className='addproductItem'>
                    <label>Year</label>
                    <input type="text" placeholder='year' name="year" onChange={handelChange} />
                </div>
                <div className='addproductItem'>
                    <label>Genre</label>
                    <input type="text" placeholder='genre' name="genre" onChange={handelChange} />
                </div>
                <div className='addproductItem'>
                    <label>Duration</label>
                    <input type="text" placeholder='duration' name="duration" onChange={handelChange} />
                </div>
                <div className='addproductItem'>
                    <label>Limit</label>
                    <input type="text" placeholder='limit' name="limit" onChange={handelChange} />
                </div>

                <div className='addproductItem'>
                    <label>isSeries</label>
                    <select id="isSeries" name="isSeries" onChange={handelChange} >
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>



                <div className='addproductItem'>
                    <label>Trailer  </label>
                    <input type="text" placeholder='Trailer' name="Trailer" onChange={handelChange} />
                </div>





                <button className="userUpdateButton" onClick={handelSubmit}>create</button>


            </form>







        </div>
    )
}

export default NewProduct